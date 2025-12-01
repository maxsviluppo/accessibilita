import React from 'react';
import { TechItem } from '../types';
import { Zap, History } from 'lucide-react';

interface TechCardProps {
  item: TechItem;
}

export const TechCard: React.FC<TechCardProps> = ({ item }) => {
  return (
    <div className={`relative p-5 rounded-xl border-l-4 h-full flex flex-col ${
      item.isModern 
        ? 'bg-white border-emerald-500 shadow-lg shadow-emerald-100' 
        : 'bg-slate-50 border-slate-400 opacity-90'
    }`}>
      <div className="flex items-start justify-between mb-3">
        <h4 className={`font-bold text-lg leading-tight ${item.isModern ? 'text-slate-900' : 'text-slate-700'}`}>
          {item.name}
        </h4>
        {item.isModern ? (
          <Zap size={18} className="text-emerald-500 flex-shrink-0" />
        ) : (
          <History size={18} className="text-slate-400 flex-shrink-0" />
        )}
      </div>
      <p className="text-sm text-slate-600 leading-relaxed flex-grow">
        {item.description}
      </p>
      {item.isModern && (
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center">
          <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
            Nuova Tecnologia
          </span>
        </div>
      )}
    </div>
  );
};