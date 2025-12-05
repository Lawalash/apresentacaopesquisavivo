import React from 'react';
import { Lock } from 'lucide-react';
import TechnologicalBackground from '../TechnologicalBackground';

const Cover: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center relative z-10 overflow-hidden">
      {/* Background Animation */}
      <TechnologicalBackground 
        particleCount={70} 
        speed={0.3} 
        className="opacity-40" 
      />

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8 p-6 bg-cyan-500/10 rounded-full border border-cyan-500/30 backdrop-blur-sm shadow-[0_0_30px_rgba(6,182,212,0.2)]">
          <Lock size={80} className="text-cyan-400" />
        </div>
        
        <h1 className="text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
          Governança Locker <span className="text-cyan-400">— VIVO</span>
        </h1>
        
        <h2 className="text-3xl text-slate-300 font-light mb-12">
          Pesquisa de Satisfação — Eficiência Fora da PA
        </h2>

        <div className="mt-12 text-slate-400 text-lg border-t border-slate-700/50 pt-8 px-12 backdrop-blur-sm bg-slate-900/30 rounded-xl">
          <p><strong>N = 178</strong> Colaboradores</p>
          <p>{new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;