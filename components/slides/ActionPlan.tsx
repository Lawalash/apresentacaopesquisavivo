import React from 'react';
import { CheckSquare } from 'lucide-react';

type Priority = {
  level: 'Alta' | 'Média' | 'Baixa';
  accentBar: string;     // bg-*
  accentText: string;    // text-*
  accentRing: string;    // ring-*
  accentGlow: string;    // shadow-*
  items: string[];
};

const ActionPlan: React.FC = () => {
  const priorities: Priority[] = [
    {
      level: 'Alta',
      accentBar: 'bg-red-500',
      accentText: 'text-red-300',
      accentRing: 'ring-red-500/20',
      accentGlow: 'hover:shadow-red-500/10',
      items: ['Corrigir deslog durante atendimento', 'Integrar Locker ↔ WDE', 'Corrigir autoabertura e travamentos'],
    },
    {
      level: 'Média',
      accentBar: 'bg-yellow-500',
      accentText: 'text-yellow-300',
      accentRing: 'ring-yellow-500/20',
      accentGlow: 'hover:shadow-yellow-500/10',
      items: ['Melhorar suporte local / SLA', 'Corrigir erros de importação / logs'],
    },
    {
      level: 'Baixa',
      accentBar: 'bg-green-500',
      accentText: 'text-green-300',
      accentRing: 'ring-green-500/20',
      accentGlow: 'hover:shadow-green-500/10',
      items: ['Reforçar comunicação e treinamento', 'Dashboards e monitoramento de uso'],
    },
  ];

  return (
    <div className="h-full w-full flex flex-col">
      {/* Container central (igual vibe do deck) */}
      <div className="w-full max-w-6xl mx-auto px-6 py-10 flex-1 flex flex-col justify-center">
        {/* Header opcional, alinhado com sua linguagem visual (cyan + slate) */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-widest">
            Prioridades
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Plano de Ação
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Foco no que destrava valor para a operação
          </p>
        </div>

        {/* Grid centralizado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {priorities.map((p) => (
            <div
              key={p.level}
              className="w-full max-w-sm h-full"
            >
              <div
                className={[
                  'group relative h-full overflow-hidden rounded-2xl',
                  'bg-slate-800/40 border border-slate-700',
                  'shadow-lg transition-all duration-300',
                  'hover:-translate-y-1 hover:shadow-2xl',
                  p.accentGlow,
                ].join(' ')}
              >
                {/* Accent bar (esquerda) */}
                <div className={`absolute left-0 top-0 h-full w-1.5 ${p.accentBar}`} />

                {/* Conteúdo */}
                <div className="p-6 pl-7 flex flex-col h-full">
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${p.accentBar}`} />
                      <span className={`text-xs font-bold uppercase tracking-widest ${p.accentText}`}>
                        Prioridade {p.level}
                      </span>
                    </div>

                    {/* “chip” discreto, com ring do status */}
                    <div className={`px-2 py-1 rounded-md bg-slate-900/40 ring-1 ${p.accentRing} text-slate-300 text-[11px]`}>
                      Ações
                    </div>
                  </div>

                  {/* Lista */}
                  <ul className="space-y-3 flex-1">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckSquare
                          size={18}
                          className={`shrink-0 mt-0.5 ${p.accentText} opacity-80 group-hover:opacity-100 transition-opacity`}
                        />
                        <span className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-100 transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Rodapé do card (micro detalhe visual) */}
                  <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      Execução incremental
                    </span>
                    <span className={`text-xs font-semibold ${p.accentText}`}>
                      {p.level}
                    </span>
                  </div>
                </div>

                {/* brilho sutil no hover (sem classe dinâmica inválida) */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-cyan-500/10 blur-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActionPlan;
