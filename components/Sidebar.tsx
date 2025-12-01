import React from 'react';
import { LESSON_DATA } from '../constants';
import { SectionType } from '../types';

interface SidebarProps {
  currentSection: SectionType;
  onSelectSection: (id: SectionType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentSection, onSelectSection }) => {
  return (
    <div className="w-64 bg-slate-900 text-slate-100 h-screen flex-shrink-0 flex flex-col shadow-2xl overflow-y-auto sticky top-0">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-xl font-bold tracking-tight text-white">Accessibilità 2.0</h1>
        <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Guida Docente</p>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {LESSON_DATA.map((section) => {
          const Icon = section.icon;
          const isActive = currentSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => onSelectSection(section.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon size={20} className={isActive ? 'text-white' : 'text-slate-500 group-hover:text-blue-400'} />
              <span className="text-sm font-medium text-left">{section.title}</span>
            </button>
          );
        })}
      </nav>
      <div className="p-6 border-t border-slate-800 text-xs text-slate-500">
        <p>Supportato da Gemini 2.5 Flash</p>
      </div>
    </div>
  );
};