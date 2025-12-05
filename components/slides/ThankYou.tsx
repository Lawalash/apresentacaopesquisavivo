import React from 'react';
import { Mail } from 'lucide-react';
import TechnologicalBackground from '../TechnologicalBackground';

const ThankYou: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center relative z-10 overflow-hidden">
      {/* Subtle Background Animation */}
      <TechnologicalBackground 
        particleCount={40} 
        speed={0.2} 
        className="opacity-20"
      />

      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
         <span className="text-[300px] font-bold text-cyan-500">VIVO</span>
      </div>
      
      <div className="relative z-10">
        <h1 className="text-6xl font-bold text-white mb-8 tracking-tight drop-shadow-xl">
          Obrigado!
        </h1>
        
        <div className="flex flex-col items-center gap-4 bg-slate-800/80 p-8 rounded-xl border border-slate-700 backdrop-blur-md shadow-2xl">
          <p className="text-slate-300 text-lg">Dúvidas ou sugestões?</p>
          <div className="flex items-center gap-3 text-cyan-400 text-xl font-bold hover:text-cyan-300 transition-colors">
            <Mail />
            <a href="mailto:m.ricardo.junior@aec.com.br" className="hover:underline">m.ricardo.junior@aec.com.br</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;