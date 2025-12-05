import React from 'react';
import { PRINCIPLES } from '../../data/report';

const Principles: React.FC = () => {
  return (
    <div className="h-full w-full grid md:grid-cols-[1fr_1.2fr] gap-8 items-center">
      {/* Left Panel - Title */}
      <div className="flex flex-col justify-center px-4 md:px-6 lg:px-10 text-white">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider mb-2 opacity-90">
          PRINCÍPIOS
        </h2>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
          INEGOCIÁVEIS
        </h2>
      </div>

      {/* Right Panel - List */}
      <div className="h-full flex items-center px-4 md:px-6 lg:px-10">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 w-full">
          {PRINCIPLES.map((principle, index) => (
            <li
              key={index}
              className="text-slate-200 text-base md:text-lg leading-snug border border-slate-800/60 rounded-xl p-4 bg-white/5 hover:border-cyan-400/60 transition-colors"
            >
              {principle}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Principles;