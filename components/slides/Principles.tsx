import React from 'react';

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
  "SOMOS FELIZES COM O QUE FAZEMOS."
];

const Principles: React.FC = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-950 via-[#051021] to-slate-900 flex items-center justify-center px-6 md:px-12 lg:px-16 py-12 md:py-0">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Section - Title */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-3">
            <p className="uppercase tracking-[0.2em] text-xs md:text-sm text-cyan-400 font-semibold opacity-80">
              Nossa Essência
            </p>
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Princípios
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight">
                Inegociáveis
              </h2>
            </div>
          </div>
          
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
          
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-sm">
            Os valores fundamentais que guiam nossas decisões, ações e relacionamentos.
          </p>
        </div>

        {/* Right Section - Principles List */}
        <div className="flex flex-col space-y-4 md:space-y-5">
          {PRINCIPLES.map((principle, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/5 hover:border-cyan-400/30 transition-all duration-300 cursor-default"
            >
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold text-sm">
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
  );
};

export default Principles;