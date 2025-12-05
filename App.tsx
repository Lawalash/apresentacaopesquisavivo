import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Printer, Menu, X } from 'lucide-react';
import { QUESTIONS } from './data/report';

// Slide Components
import SlideLayout from './components/SlideLayout';
import Cover from './components/slides/Cover';
import Principles from './components/slides/Principles';
import ExecutiveSummary from './components/slides/ExecutiveSummary';
import ChartSlide from './components/slides/ChartSlide';
import TextAnalysis from './components/slides/TextAnalysis';
import ActionPlan from './components/slides/ActionPlan';
import ThankYou from './components/slides/ThankYou';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Define the slide sequence
  const slides = [
    { id: 'cover', component: <Cover />, title: '' },
    { id: 'principles', component: <Principles />, title: 'Princípios Inegociáveis' },
    { id: 'exec-summary', component: <ExecutiveSummary />, title: 'Resumo Executivo (KPIs)' },
    // Map Questions to generic ChartSlide
    ...QUESTIONS.map(q => ({
      id: q.id,
      component: <ChartSlide data={q} />,
      title: q.title
    })),
    { id: 'text-analysis', component: <TextAnalysis />, title: 'Análise de Respostas Abertas' },
    { id: 'action-plan', component: <ActionPlan />, title: 'Prioridades & Plano de Ação' },
    { id: 'thank-you', component: <ThankYou />, title: '' }
  ];

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-screen h-screen bg-slate-950 flex items-center justify-center overflow-hidden">
      
      {/* --- Main Display Area --- */}
      <div className="w-full h-full lg:aspect-video lg:h-[90vh] lg:w-auto relative shadow-2xl overflow-hidden print:w-full print:h-screen print:shadow-none">
        
        {/* Render ALL slides for print, but only current for screen */}
        <div className="hidden print:block">
           {slides.map((slide, idx) => (
             <div key={idx} className="h-screen w-screen break-after-page page-break-always">
               <SlideLayout 
                 slideNumber={idx + 1} 
                 totalSlides={totalSlides}
                 title={slide.title}
               >
                 {slide.component}
               </SlideLayout>
             </div>
           ))}
        </div>

        {/* Screen View */}
        <div className="w-full h-full print:hidden">
          <SlideLayout 
            slideNumber={currentSlide + 1} 
            totalSlides={totalSlides}
            title={slides[currentSlide].title}
          >
            {slides[currentSlide].component}
          </SlideLayout>
        </div>
        
        {/* --- Navigation Controls (Bottom Center) --- */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3 no-print z-50">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            title="Slide Anterior"
            aria-label="Slide Anterior"
            className="w-11 h-11 flex items-center justify-center bg-white/5 hover:bg-white/10 text-white rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-white/10 backdrop-blur-sm shadow-sm hover:shadow-md hover:-translate-y-[2px]"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            title="Próximo Slide"
            aria-label="Próximo Slide"
            className="w-11 h-11 flex items-center justify-center bg-white/5 hover:bg-white/10 text-white rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-white/10 backdrop-blur-sm shadow-sm hover:shadow-md hover:-translate-y-[2px]"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* --- Top Right Controls --- */}
        <div className="absolute top-6 right-6 flex gap-3 no-print z-50">
           <button 
            onClick={handlePrint}
            title="Imprimir / PDF"
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-600 flex items-center gap-2 text-sm font-medium px-4"
          >
            <Printer size={16} /> <span className="hidden sm:inline">Exportar</span>
          </button>
          
          <button 
            onClick={() => setMenuOpen(true)}
            title="Menu de Slides"
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-600"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* --- Slide Menu Overlay --- */}
        {menuOpen && (
          <div className="absolute inset-0 bg-slate-900/95 z-50 p-8 flex flex-col no-print backdrop-blur-sm">
            <div className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4">
              <h2 className="text-2xl text-white font-bold">Navegação de Slides</h2>
              <button onClick={() => setMenuOpen(false)} className="text-slate-400 hover:text-white">
                <X size={32} />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto pb-8">
              {slides.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentSlide(idx);
                    setMenuOpen(false);
                  }}
                  className={`p-4 rounded-lg border text-left transition-all ${
                    currentSlide === idx 
                      ? 'bg-cyan-900/30 border-cyan-500 text-cyan-400' 
                      : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <span className="block text-xs font-mono opacity-50 mb-1">Slide {idx + 1}</span>
                  <span className="font-medium text-sm">{slide.title || (slide.id === 'cover' ? 'Capa' : 'Slide')}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;