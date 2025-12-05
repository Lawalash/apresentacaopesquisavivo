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

const TechnologicalBackground = ({ particleCount = 40, speed = 0.2, className = "", lineColor = "rgba(255, 255, 255, 0.1)", particleColor = "rgba(255, 255, 255, 0.4)" }) => {
  return (
    <svg className={`absolute inset-0 w-full h-full ${className}`} style={{ filter: 'blur(0.5px)' }}>
      {/* Animated particles */}
      <defs>
        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0px) translateX(0px); }
              50% { transform: translateY(-20px) translateX(10px); }
            }
            .particle {
              animation: float 8s ease-in-out infinite;
            }
          `}
        </style>
      </defs>
      {Array.from({ length: particleCount }).map((_, i) => (
        <circle
          key={i}
          cx={Math.random() * 100 + '%'}
          cy={Math.random() * 100 + '%'}
          r={Math.random() * 2 + 0.5}
          fill={particleColor}
          className="particle"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </svg>
  );
};

const Principles: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#051021] to-slate-900">
      {/* Left Panel - Title & Animation */}
      <div className="lg:w-5/12 h-1/3 lg:h-full bg-[#051021] relative flex flex-col justify-center px-8 sm:px-10 md:px-12 overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800">
        {/* Animation limited to left panel */}
        <TechnologicalBackground 
          particleCount={40} 
          speed={0.2} 
          className="opacity-30" 
          lineColor="rgba(255, 255, 255, 0.1)"
          particleColor="rgba(255, 255, 255, 0.4)"
        />
        
        {/* Geometric Accent */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="w-96 h-96 bg-blue-900/15 rounded-full blur-3xl -translate-x-16 -translate-y-8" />
          <div className="absolute w-80 h-80 bg-blue-800/10 rounded-full blur-3xl translate-x-20 translate-y-20" />
        </div>

        <div className="relative z-10 text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-light tracking-wider mb-1 sm:mb-2 opacity-90">
            PRINCÍPIOS
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-bold tracking-tight text-white drop-shadow-lg leading-tight">
            INEGOCIÁVEIS
          </h2>
        </div>
      </div>

      {/* Right Panel - List */}
      <div className="lg:w-7/12 h-2/3 lg:h-full bg-gradient-to-br from-slate-900 to-slate-950 flex items-center overflow-hidden">
        <div className="w-full h-full overflow-y-auto px-8 sm:px-10 md:px-12 py-8 md:py-12 flex items-center">
          <ol className="space-y-4 sm:space-y-5 w-full">
            {PRINCIPLES.map((principle, index) => (
              <li key={index} className="flex gap-4 items-start group">
                <span className="text-cyan-400 font-semibold text-sm sm:text-base md:text-lg flex-shrink-0 pt-0.5">
                  {index + 1}.
                </span>
                <span className="text-slate-100 text-sm sm:text-base md:text-lg leading-relaxed group-hover:text-cyan-300 transition-colors duration-300">
                  {principle}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Principles;