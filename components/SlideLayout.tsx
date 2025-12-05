import React from 'react';

interface SlideLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  slideNumber: number;
  totalSlides: number;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ children, title, subtitle, slideNumber, totalSlides }) => {
  return (
    <div className="w-full h-full flex flex-col p-8 relative overflow-hidden bg-slate-900 slide-container">
      {/* Background Graphic Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-800 to-transparent opacity-30 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-900 rounded-full blur-3xl opacity-20 pointer-events-none" />

      {/* Header */}
      {(title || subtitle) && (
        <div className="mb-6 z-10 border-b border-slate-700 pb-4">
          {title && <h2 className="text-3xl font-bold text-cyan-400 uppercase tracking-wider">{title}</h2>}
          {subtitle && <h3 className="text-xl text-slate-400 mt-1">{subtitle}</h3>}
        </div>
      )}

      {/* Content Area */}
      <div className="flex-1 flex flex-col relative z-10 overflow-y-auto no-scrollbar">
        {children}
      </div>

      {/* Footer */}
      <div className="mt-auto pt-4 flex justify-between items-center text-slate-500 text-sm z-10 border-t border-slate-800">
        <div>Governança Locker — VIVO</div>
        <div className="font-mono">{slideNumber} / {totalSlides}</div>
      </div>
    </div>
  );
};

export default SlideLayout;
