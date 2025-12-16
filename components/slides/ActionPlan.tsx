import React from 'react';
import { CheckSquare } from 'lucide-react';

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
    </div>
  );
};

export default ActionPlan;
