import React from 'react';
import { SurveyQuestion } from '../../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';
import { Info } from 'lucide-react';

interface Props {
  data: SurveyQuestion;
}

const ChartSlide: React.FC<Props> = ({ data }) => {
  const totalVotes = data.data.reduce((acc, curr) => acc + curr.value, 0);

  // Custom tooltip for charts
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 border border-slate-700 p-3 rounded shadow-xl">
          <p className="font-bold text-cyan-400">{payload[0].name}</p>
          <p className="text-white">{`${payload[0].value} votos (${((payload[0].value / totalVotes) * 100).toFixed(1)}%)`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-full flex flex-col lg:flex-row gap-8">
      {/* Chart Area */}
      <div className="flex-1 bg-slate-800/30 rounded-xl p-4 min-h-[300px] flex items-center justify-center border border-slate-800">
        <ResponsiveContainer width="100%" height="100%">
          {data.chartType === 'bar' ? (
            <BarChart
              data={data.data}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
              <XAxis type="number" stroke="#94a3b8" />
              <YAxis 
                type="category" 
                dataKey="name" 
                width={150} 
                stroke="#f8fafc" 
                tick={{fontSize: 12}} 
              />
              <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {data.data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color || '#06b6d4'} />
                ))}
              </Bar>
            </BarChart>
          ) : (
            <PieChart>
              <Pie
                data={data.data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {data.data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color || '#06b6d4'} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend verticalAlign="bottom" height={36} wrapperStyle={{color: '#fff'}} />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Info & Stats Area */}
      <div className="lg:w-1/3 flex flex-col justify-center gap-6">
        <div className="bg-slate-800 p-6 rounded-lg border-l-4 border-cyan-500">
          <div className="flex items-center gap-2 mb-3 text-cyan-400 font-bold uppercase tracking-wider text-sm">
            <Info size={18} />
            Insight
          </div>
          <p className="text-slate-300 leading-relaxed text-lg">
            {data.insight}
          </p>
        </div>

        <div className="bg-slate-900 rounded-lg p-6 border border-slate-700">
          <h4 className="text-slate-400 uppercase text-xs font-bold mb-4">Detalhamento</h4>
          <table className="w-full text-sm">
            <tbody>
              {data.data.map((row, idx) => (
                <tr key={idx} className="border-b border-slate-800 last:border-0">
                  <td className="py-2 text-slate-300">{row.name}</td>
                  <td className="py-2 text-right font-mono text-cyan-400">{row.value}</td>
                  <td className="py-2 text-right font-mono text-slate-500 w-16">
                    {((row.value / totalVotes) * 100).toFixed(1)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChartSlide;
