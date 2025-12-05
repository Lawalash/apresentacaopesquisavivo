import React from 'react';
import TechnologicalBackground from '../TechnologicalBackground';

// Sample data - ajuste conforme necessário
const PRINCIPLES = [
  "ESTAMOS AQUI PARA FAZER MELHOR QUE TODOS.",
  "FOCAMOS A INOVAÇÃO CONSTANTEMENTE.",
  "SÓ ACREDITAMOS NO SIMPLES.",
  "SOMENTE ENTRAMOS NO MERCADO EM QUE PODEMOS FAZER UMA CONTRIBUIÇÃO SIGNIFICATIVA.",
  "TEMOS FOCO.",
  "ACREDITAMOS NA COLABORAÇÃO MÚTUA DOS NOSSOS GRUPOS.",
  "NÃO ACEITAMOS NADA QUE ESTEJA ABAIXO DO NÍVEL DE EXCELÊNCIA.",
  "SOMOS HUMILDES E HONESTOS PARA ADMITIR NOSSOS ERROS.",
  "SOMOS CORAJOSOS O SUFICIENTE PARA MUDARMOS QUANDO NECESSÁRIO.",
  "SOMOS FELIZES COM O QUE FAZEMOS.",
];

const Principles: React.FC = () => {
  return (
    <div className="relative h-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40">
      {/* Background Animation */}
      <TechnologicalBackground className="opacity-20" particleCount={60} speed={0.25} />

      {/* Accent Glows */}
      <div className="absolute -left-20 -top-10 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-52 w-52 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative z-10 h-full flex flex-col">
        <div className="grid h-full grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] items-center p-6 lg:p-8">
          {/* Left Section - Title */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="uppercase tracking-[0.2em] text-xs md:text-sm text-cyan-400 font-semibold opacity-80">
                Nossa Essência
              </p>
              <div className="space-y-1">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Princípios
                </h2>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight">
                  Inegociáveis
                </h2>
              </div>
            </div>

            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-cyan-300 to-transparent rounded-full" />

            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl">
              Os valores fundamentais que guiam nossas decisões, ações e relacionamentos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-400">
              <div className="rounded-lg border border-white/5 bg-white/5 p-4">
                <p className="text-cyan-300 font-semibold">Foco e Simplicidade</p>
                <p className="mt-2 leading-relaxed">Priorizamos impacto claro, soluções diretas e contribuição relevante.</p>
              </div>
              <div className="rounded-lg border border-white/5 bg-white/5 p-4">
                <p className="text-cyan-300 font-semibold">Excelência e Colaboração</p>
                <p className="mt-2 leading-relaxed">Mantemos padrão alto, aprendemos com erros e evoluímos juntos.</p>
              </div>
            </div>
          </div>

          {/* Right Section - Principles List */}
          <div className="flex flex-col space-y-3 md:space-y-4 bg-slate-900/60 border border-slate-800 rounded-xl p-4 lg:p-6 backdrop-blur">
            {PRINCIPLES.map((principle, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/5 hover:border-cyan-400/30 transition-all duration-300 cursor-default"
              >
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold text-sm shadow-lg shadow-cyan-500/20">
                    {index + 1}
                  </span>
                </div>
                <span className="flex-1 text-slate-100 text-sm md:text-base leading-relaxed group-hover:text-cyan-300 transition-colors duration-300">
                  {principle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principles;
