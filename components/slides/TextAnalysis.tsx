import React, { useMemo } from 'react';
import { MOCK_COMMENTS } from '../../data/report';
import { analyzeComments } from '../../utils/textAnalysis';
import { MessageSquare, ThumbsUp, ThumbsDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';

const TextAnalysis: React.FC = () => {
  const analysis = useMemo(() => analyzeComments(MOCK_COMMENTS), []);

  return (
    <div className="h-full flex flex-col gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
        {/* Chart */}
        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex flex-col">
          <h4 className="text-cyan-400 font-bold mb-4 flex items-center gap-2">
            <MessageSquare size={18} /> Volume por Tópico (Estimado)
          </h4>
          <div className="flex-1 min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analysis} layout="vertical" margin={{ left: 40 }}>
                 <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                <XAxis type="number" stroke="#94a3b8" hide />
                <YAxis dataKey="topic" type="category" width={140} stroke="#cbd5e1" tick={{fontSize: 11}} />
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff' }}
                />
                <Bar dataKey="count" fill="#06b6d4" barSize={20} radius={[0,4,4,0]}>
                   {analysis.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.topic.includes('Positivo') ? '#10b981' : (entry.topic.includes('Instabilidade') ? '#ef4444' : '#06b6d4')} />
                    ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Examples */}
        <div className="flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
          {analysis.slice(0, 3).map((item, idx) => (
            <div key={idx} className="bg-slate-800 p-4 rounded-lg border border-slate-700">
               <div className="flex justify-between items-center mb-2">
                 <h5 className="font-bold text-white text-sm uppercase tracking-wide">{item.topic}</h5>
                 {item.topic.includes('Positivo') ? <ThumbsUp size={16} className="text-green-500" /> : <ThumbsDown size={16} className="text-red-400" />}
               </div>
               <div className="space-y-2">
                 {item.examples.map((ex, i) => (
                   <p key={i} className="text-slate-400 text-sm italic border-l-2 border-slate-600 pl-3">
                     "{ex}"
                   </p>
                 ))}
               </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-cyan-900/20 p-4 rounded border border-cyan-500/30 text-center">
        <p className="text-cyan-200 text-sm">
          <strong>Categorização Automática:</strong> Baseada em palavras-chave presentes nas respostas abertas (N=178). 
          Respostas curtas ou não informativas foram excluídas da análise.
        </p>
      </div>
    </div>
  );
};

export default TextAnalysis;
