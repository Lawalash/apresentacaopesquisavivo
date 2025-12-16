import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { SurveyQuestion } from '../../types';
import { Sparkles, ArrowUpRight, ArrowDownRight, Info } from 'lucide-react';

interface Props {
  question: SurveyQuestion;
}

const HIERARCHY_ORDER = ['Coordenador', 'Gerente Jr', 'Gerente Sênior', 'Analista Operação', 'Supervisor'];

const HierarchySlide: React.FC<Props> = ({ question }) => {
  const hierarchyData = useMemo(() => {
    if (!question.hierarchyBreakdown) return [];

    return question.hierarchyBreakdown
      .slice()
      .sort((a, b) => HIERARCHY_ORDER.indexOf(a.hierarchy) - HIERARCHY_ORDER.indexOf(b.hierarchy))
      .map(h => {
        const total = h.totalResponses || h.distribution.reduce((acc, curr) => acc + curr.value, 0);
        const entry: Record<string, number | string> = { hierarchy: h.hierarchy, total };
        h.distribution.forEach(option => {
          entry[option.name] = option.value;
          entry[`${option.name}-count`] = option.value;
        });
        return entry;
      });
  }, [question.hierarchyBreakdown]);

  const positiveStats = useMemo(() => {
    if (!question.hierarchyBreakdown) return [];
    const positiveOptions = question.positiveOptions || [question.data[0]?.name].filter(Boolean) as string[];

    return question.hierarchyBreakdown
      .slice()
      .sort((a, b) => HIERARCHY_ORDER.indexOf(a.hierarchy) - HIERARCHY_ORDER.indexOf(b.hierarchy))
      .map(h => {
        const total = h.totalResponses || h.distribution.reduce((acc, curr) => acc + curr.value, 0);
        const positiveSum = h.distribution
          .filter(d => positiveOptions.includes(d.name))
          .reduce((acc, curr) => acc + curr.value, 0);
        const top = h.distribution.reduce((best, curr) => (curr.value > best.value ? curr : best), h.distribution[0]);
        return {
          hierarchy: h.hierarchy,
          total,
          positivePercentage: (positiveSum / total) * 100,
          topOption: {
            name: top.name,
            percentage: (top.value / total) * 100,
          },
        };
      });
  }, [question.hierarchyBreakdown, question.positiveOptions, question.data]);

  if (!question.hierarchyBreakdown || question.hierarchyBreakdown.length === 0) {
    return (
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-8 flex items-center justify-center text-slate-300 text-center">
        <div>
          <p className="text-xl font-semibold text-white mb-2">Sem dados por hierarquia</p>
          <p className="text-sm text-slate-400">Esta pergunta ainda não possui consolidação por nível hierárquico.</p>
        </div>
      </div>
    );
  }

  const highestPositive = positiveStats.reduce((best, curr) => (curr.positivePercentage > best.positivePercentage ? curr : best), positiveStats[0]);
  const lowestPositive = positiveStats.reduce((best, curr) => (curr.positivePercentage < best.positivePercentage ? curr : best), positiveStats[0]);

  const optionColors = question.hierarchyBreakdown[0].distribution.reduce<Record<string, string>>((acc, curr) => {
    acc[curr.name] = curr.color || '#06b6d4';
    return acc;
  }, {});

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload || payload.length === 0) return null;
    const { name, value, payload: row } = payload[0];
    const countKey = `${name}-count`;
    const count = row[countKey];
    return (
      <div className="bg-slate-900 border border-slate-700 p-3 rounded shadow-xl">
        <p className="font-bold text-cyan-400">{`${label} — ${name}`}</p>
        <p className="text-white">{`${count} votos (${(value * 100).toFixed(1)}%)`}</p>
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
            <XAxis type="number" stroke="#94a3b8" tickFormatter={(v) => `${(v * 100).toFixed(0)}%`} domain={[0, 1]} />
            <YAxis type="category" dataKey="hierarchy" stroke="#f8fafc" width={150} tick={{ fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
            <Legend wrapperStyle={{ color: '#e2e8f0' }} />
            {Object.keys(optionColors).map((option) => (
              <Bar key={option} dataKey={option} stackId="a" fill={optionColors[option]} radius={[0, 4, 4, 0]} />
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
