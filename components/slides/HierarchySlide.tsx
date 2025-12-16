import React, { useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  TooltipProps,
} from 'recharts';
import { Sparkles, ArrowUpRight, ArrowDownRight, Info } from 'lucide-react';
import { SurveyQuestion } from '../../types';

interface Props {
  question: SurveyQuestion;
}

const HIERARCHY_ORDER = ['Coordenador', 'Gerente Jr', 'Gerente Sênior', 'Analista Operação', 'Supervisor'];

type HierarchyRow = {
  hierarchy: string;
  total: number;
  // dynamic keys: optionName -> count
  [optionName: string]: string | number;
};

const orderIndex = (hierarchy: string) => {
  const idx = HIERARCHY_ORDER.indexOf(hierarchy);
  return idx === -1 ? Number.MAX_SAFE_INTEGER : idx;
};

const safePct = (num: number, den: number) => (den > 0 ? (num / den) * 100 : 0);

/**
 * Torna o cálculo de "positivo" resiliente:
 * - Se vier "Satisfeito / Muito satisfeito" e a distribuição tiver "Satisfeito" e "Muito satisfeito",
 *   a gente expande.
 */
const expandPositiveOptions = (positiveOptions: string[], distributionNames: string[]) => {
  const set = new Set<string>();

  for (const opt of positiveOptions) {
    if (distributionNames.includes(opt)) set.add(opt);

    // tentativa de expandir "A / B" -> ["A","B"]
    if (opt.includes('/')) {
      opt.split('/').map(s => s.trim()).forEach(part => {
        if (distributionNames.includes(part)) set.add(part);
      });
    }
  }

  return [...set];
};

const HierarchySlide: React.FC<Props> = ({ question }) => {
  const breakdown = question.hierarchyBreakdown ?? [];

  const optionMeta = useMemo(() => {
    // união das opções em todos os níveis
    const names = new Set<string>();
    const colors: Record<string, string> = {};

    for (const h of breakdown) {
      for (const d of h.distribution) {
        names.add(d.name);
        if (!colors[d.name] && d.color) colors[d.name] = d.color;
      }
    }

    return {
      optionNames: Array.from(names),
      colors,
    };
  }, [breakdown]);

  const hierarchyData = useMemo<HierarchyRow[]>(() => {
    if (!breakdown.length) return [];

    return breakdown
      .slice()
      .sort((a, b) => orderIndex(a.hierarchy) - orderIndex(b.hierarchy))
      .map(h => {
        const computedTotal = h.distribution.reduce((acc, curr) => acc + curr.value, 0);
        const total = h.totalResponses ?? computedTotal;

        const row: HierarchyRow = { hierarchy: h.hierarchy, total };

        // preenche todas as opções com 0 (garante consistência do stack)
        for (const opt of optionMeta.optionNames) row[opt] = 0;

        // aplica os valores existentes
        for (const d of h.distribution) row[d.name] = d.value;

        return row;
      });
  }, [breakdown, optionMeta.optionNames]);

  const positiveStats = useMemo(() => {
    if (!breakdown.length) return [];

    return breakdown
      .slice()
      .sort((a, b) => orderIndex(a.hierarchy) - orderIndex(b.hierarchy))
      .map(h => {
        const computedTotal = h.distribution.reduce((acc, curr) => acc + curr.value, 0);
        const total = h.totalResponses ?? computedTotal;

        const distributionNames = h.distribution.map(d => d.name);
        const basePositive = (question.positiveOptions && question.positiveOptions.length > 0)
          ? question.positiveOptions
          : []; // se não definirem, não “chuto” positivo

        const effectivePositive = expandPositiveOptions(basePositive, distributionNames);

        const positiveSum = effectivePositive.length
          ? h.distribution
              .filter(d => effectivePositive.includes(d.name))
              .reduce((acc, curr) => acc + curr.value, 0)
          : 0;

        const top = h.distribution.length
          ? h.distribution.reduce((best, curr) => (curr.value > best.value ? curr : best), h.distribution[0])
          : { name: '—', value: 0 };

        return {
          hierarchy: h.hierarchy,
          total,
          positivePercentage: safePct(positiveSum, total),
          topOption: {
            name: top.name,
            percentage: safePct(top.value, total),
          },
        };
      });
  }, [breakdown, question.positiveOptions]);

  if (!breakdown.length) {
    return (
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-8 flex items-center justify-center text-slate-300 text-center">
        <div>
          <p className="text-xl font-semibold text-white mb-2">Sem dados por hierarquia</p>
          <p className="text-sm text-slate-400">Esta pergunta ainda não possui consolidação por nível hierárquico.</p>
        </div>
      </div>
    );
  }

  const highestPositive = positiveStats.reduce((best, curr) =>
    curr.positivePercentage > best.positivePercentage ? curr : best
  , positiveStats[0]);

  const lowestPositive = positiveStats.reduce((best, curr) =>
    curr.positivePercentage < best.positivePercentage ? curr : best
  , positiveStats[0]);

  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (!active || !payload?.length) return null;

    const item = payload[0];
    const dataKey = String(item.dataKey);      // nome da alternativa
    const row = item.payload as HierarchyRow;  // linha do gráfico

    const count = Number(row[dataKey] ?? 0);
    const total = Number(row.total ?? 0);
    const pct = safePct(count, total);

    return (
      <div className="bg-slate-900 border border-slate-700 p-3 rounded shadow-xl">
        <p className="font-bold text-cyan-400">{`${label} — ${dataKey}`}</p>
        <p className="text-white">{`${count} votos (${pct.toFixed(1)}%)`}</p>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col lg:flex-row gap-8">
      <div className="flex-1 bg-slate-800/40 rounded-xl p-4 border border-slate-800">
        <div className="flex items-center gap-2 text-xs uppercase text-slate-400 font-semibold mb-2">
          <Sparkles size={16} className="text-cyan-400" />
          Distribuição por hierarquia
        </div>

        <ResponsiveContainer width="100%" height={360}>
          <BarChart
            data={hierarchyData}
            layout="vertical"
            margin={{ top: 16, right: 20, left: 20, bottom: 16 }}
            stackOffset="expand"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
            <XAxis
              type="number"
              stroke="#94a3b8"
              tickFormatter={(v) => `${(Number(v) * 100).toFixed(0)}%`}
              domain={[0, 1]}
            />
            <YAxis type="category" dataKey="hierarchy" stroke="#f8fafc" width={150} tick={{ fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
            <Legend wrapperStyle={{ color: '#e2e8f0' }} />

            {optionMeta.optionNames.map((option) => (
              <Bar
                key={option}
                dataKey={option}
                stackId="a"
                fill={optionMeta.colors[option] || '#06b6d4'}
                radius={0}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="lg:w-[38%] flex flex-col gap-4">
        <div className="bg-slate-900 rounded-lg p-4 border border-slate-700 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase text-slate-400 font-semibold">Maior positivo</p>
            <p className="text-lg font-bold text-white">{highestPositive.hierarchy}</p>
            <p className="text-sm text-cyan-400 font-semibold">{highestPositive.positivePercentage.toFixed(1)}% positivos</p>
          </div>
          <div className="bg-cyan-900/40 text-cyan-200 px-3 py-2 rounded-lg flex items-center gap-2 text-sm">
            <ArrowUpRight size={16} />
            N = {highestPositive.total}
          </div>
        </div>

        <div className="bg-slate-900 rounded-lg p-4 border border-slate-700 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase text-slate-400 font-semibold">Menor positivo</p>
            <p className="text-lg font-bold text-white">{lowestPositive.hierarchy}</p>
            <p className="text-sm text-rose-400 font-semibold">{lowestPositive.positivePercentage.toFixed(1)}% positivos</p>
          </div>
          <div className="bg-rose-900/40 text-rose-200 px-3 py-2 rounded-lg flex items-center gap-2 text-sm">
            <ArrowDownRight size={16} />
            N = {lowestPositive.total}
          </div>
        </div>

        <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
          <div className="flex items-center gap-2 mb-3 text-cyan-400 font-bold uppercase tracking-wider text-xs">
            <Info size={16} />
            Comparativo rápido
          </div>

          <table className="w-full text-sm">
            <thead>
              <tr className="text-slate-400 uppercase text-[11px] border-b border-slate-800">
                <th className="py-2 text-left font-semibold">Hierarquia</th>
                <th className="py-2 text-left font-semibold">N</th>
                <th className="py-2 text-left font-semibold">% Positivo</th>
                <th className="py-2 text-left font-semibold">Top alternativa</th>
              </tr>
            </thead>
            <tbody>
              {positiveStats.map((row) => (
                <tr key={row.hierarchy} className="border-b border-slate-800 last:border-0">
                  <td className="py-2 text-slate-200">{row.hierarchy}</td>
                  <td className="py-2 text-slate-400">{row.total}</td>
                  <td className="py-2 font-semibold text-cyan-400">{row.positivePercentage.toFixed(1)}%</td>
                  <td className="py-2 text-slate-300">
                    {row.topOption.name} ({row.topOption.percentage.toFixed(1)}%)
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default HierarchySlide;
