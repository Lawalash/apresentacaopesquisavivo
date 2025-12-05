import React from 'react';
import { KPIS } from '../../data/report';
import { TrendingUp, AlertTriangle } from 'lucide-react';

const ExecutiveSummary: React.FC = () => {
  return (
    <div className="h-full flex flex-col gap-8">
      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {KPIS.map((kpi, idx) => (
          <div key={idx} className="bg-slate-800 p-6 rounded-xl border-t-4 border-cyan-500 shadow-lg">
            <h4 className="text-slate-400 text-sm font-bold uppercase mb-2 h-10">{kpi.label}</h4>
            <div className="text-4xl font-bold text-white mb-2">{kpi.value}</div>
            <p className="text-xs text-slate-300">{kpi.subtext}</p>
          </div>
        ))}
      </div>

      {/* Analysis Block */}
      <div className="flex-1 bg-slate-800/50 p-8 rounded-xl border border-slate-700 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <TrendingUp className="text-cyan-400" />
          Interpretação Geral
        </h3>
        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            <strong className="text-cyan-400">Aceitação majoritária:</strong> A satisfação "positiva" oscila entre 50-75% em todos os quesitos, com destaque para a recomendação final (74%).
          </p>
          <p className="flex items-start gap-2">
            <AlertTriangle className="text-yellow-500 shrink-0 mt-1" size={16} />
            <span>
              <strong className="text-yellow-500">Oportunidade na massa neutra:</strong> Entre 30% a 40% dos usuários se posicionam como neutros. Isso indica que não rejeitam a ferramenta, mas aguardam melhorias visíveis ou comunicação mais clara para se tornarem promotores.
            </span>
          </p>
          <p>
            <strong className="text-cyan-400">Valor Operacional:</strong> A percepção de contribuição para o controle de jornada é o pilar mais forte do projeto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
