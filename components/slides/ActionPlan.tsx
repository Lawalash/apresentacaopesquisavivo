import React from 'react';
import { CheckSquare, ArrowRight } from 'lucide-react';

const ActionPlan: React.FC = () => {
  const priorities = [
    {
      level: 'Alta',
      color: 'bg-red-500',
      items: ['Corrigir deslog durante atendimento', 'Integrar Locker ↔ WDE', 'Corrigir autoabertura e travamentos']
    },
    {
      level: 'Média',
      color: 'bg-yellow-500',
      items: ['Melhorar suporte local / SLA', 'Corrigir erros de importação / logs']
    },
    {
      level: 'Baixa',
      color: 'bg-green-500',
      items: ['Reforçar comunicação e treinamento', 'Dashboards e monitoramento de uso']
    }
  ];

  return (
    <div className="h-full flex flex-col gap-8">
      {/* Priorities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {priorities.map((p, idx) => (
          <div key={idx} className="bg-slate-800 rounded-lg p-5 border border-slate-700 flex flex-col h-full">
            <div className={`self-start px-3 py-1 rounded text-xs font-bold uppercase text-white mb-4 ${p.color}`}>
              Prioridade {p.level}
            </div>
            <ul className="space-y-3 flex-1">
              {p.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckSquare size={16} className="shrink-0 mt-0.5 text-slate-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="mt-auto bg-slate-900 border border-slate-700 rounded-xl p-6 relative">
        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Roadmap de Correção</h4>
        
        <div className="relative flex justify-between items-center z-10">
           {/* Line */}
           <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-700 -z-10 transform -translate-y-1/2"></div>
           
           <div className="bg-slate-800 border-2 border-cyan-500 p-4 rounded-lg w-1/4 text-center">
             <div className="font-bold text-cyan-400 mb-1">30 Dias</div>
             <div className="text-xs text-slate-400">Estabilidade Crítica & Correção de Deslogs</div>
           </div>

           <ArrowRight className="text-slate-600" />

           <div className="bg-slate-800 border-2 border-slate-600 p-4 rounded-lg w-1/4 text-center">
             <div className="font-bold text-slate-200 mb-1">60 Dias</div>
             <div className="text-xs text-slate-400">Integrações (Genesys/WDE) & Logs</div>
           </div>

           <ArrowRight className="text-slate-600" />

           <div className="bg-slate-800 border-2 border-slate-600 p-4 rounded-lg w-1/4 text-center">
             <div className="font-bold text-slate-200 mb-1">90 Dias</div>
             <div className="text-xs text-slate-400">Comunicação, Treinamento & Monitoria</div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ActionPlan;
