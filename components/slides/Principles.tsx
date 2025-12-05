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
    <div className="h-full w-full bg-[#051021] flex items-center justify-center relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-800 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-center p-12">
        <div className="w-full max-w-7xl grid grid-cols-2 gap-16 items-center">
          
          {/* Left Section - Title */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-6xl lg:text-7xl font-light tracking-widest text-white opacity-90">
                PRINCÍPIOS
              </h2>
              <h2 className="text-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-lg">
                INEGOCIÁVEIS
              </h2>
            </div>
            
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
          </div>

          {/* Right Section - Principles List */}
          <div className="flex flex-col space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-4">
            {PRINCIPLES.map((principle, index) => (
              <div
                key={index}
                className="flex items-start gap-6 group"
              >
                <span className="text-cyan-400 font-bold text-xl flex-shrink-0 pt-1">
                  {index + 1}.
                </span>
                <span className="text-slate-100 text-lg leading-relaxed group-hover:text-cyan-300 transition-colors duration-300">
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