import React from 'react';
import { PRINCIPLES } from '../../data/report';

const Principles: React.FC = () => {
  return (
    <div className="h-full w-full flex items-center justify-start px-6 md:px-12 lg:px-16">
      <div className="w-full max-w-5xl space-y-8 text-left">
        <div className="space-y-1 text-white">
          <p className="uppercase tracking-[0.35em] text-sm text-cyan-300 font-semibold">Princípios</p>
          <h2 className="text-3xl md:text-4xl font-bold">Inegociáveis</h2>
        </div>

        <ul className="grid md:grid-cols-2 gap-4 md:gap-6 text-slate-100 text-base md:text-lg leading-relaxed">
          {PRINCIPLES.map((principle, index) => (
            <li
              key={index}
              className="flex items-start gap-3 border border-slate-800/60 bg-slate-900/40 rounded-xl p-4 hover:border-cyan-500/40 transition-colors"
            >
              <span className="text-cyan-300 font-semibold text-sm mt-0.5">{index + 1}.</span>
              <span className="flex-1 text-slate-100">{principle}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Principles;