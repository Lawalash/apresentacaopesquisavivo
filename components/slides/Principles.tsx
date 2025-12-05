import React from 'react';
import { PRINCIPLES } from '../../data/report';
import TechnologicalBackground from '../TechnologicalBackground';

const Principles: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col md:flex-row relative -m-8">
      {/* Left Panel - Title & Animation */}
      <div className="md:w-5/12 h-full bg-[#051021] relative flex flex-col justify-center px-8 md:px-12 overflow-hidden border-r border-slate-800">
         {/* Animation limited to left panel */}
        <TechnologicalBackground 
          particleCount={40} 
          speed={0.2} 
          className="opacity-30" 
          lineColor="rgba(255, 255, 255, 0.1)"
          particleColor="rgba(255, 255, 255, 0.4)"
        />
        
        {/* Geometric Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[60%] bg-blue-900/10 rotate-45 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider mb-2 opacity-90">
            PRINCÍPIOS
          </h2>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
            INEGOCIÁVEIS
          </h2>
        </div>
      </div>

      {/* Right Panel - List */}
      <div className="md:w-7/12 h-full bg-slate-900 flex items-center p-8 md:p-12 overflow-y-auto">
        <ul className="space-y-6 w-full">
          {PRINCIPLES.map((principle, index) => (
            <li key={index} className="text-slate-200 text-lg leading-snug border-b border-slate-800 pb-3 last:border-0 hover:text-cyan-400 transition-colors duration-300">
              {principle}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Principles;