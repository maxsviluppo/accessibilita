import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { LESSON_DATA } from './constants';
import { SectionType } from './types';
import { TechCard } from './components/TechCard';
import { GeminiAssistant } from './components/GeminiAssistant';
import { InfographicReport } from './components/InfographicReport';
import { Info, ArrowRight, BookOpen } from 'lucide-react';

export default function App() {
  const [activeSectionId, setActiveSectionId] = useState<SectionType>(SectionType.INTRO);

  const activeData = LESSON_DATA.find(s => s.id === activeSectionId) || LESSON_DATA[0];

  // If Report Section is active, render the full-page infographic component
  if (activeSectionId === SectionType.SUMMARY_REPORT) {
    return (
      <div className="flex h-screen overflow-hidden bg-slate-50">
        <Sidebar currentSection={activeSectionId} onSelectSection={setActiveSectionId} />
        <main className="flex-1 h-full overflow-y-auto">
          <InfographicReport />
        </main>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <Sidebar currentSection={activeSectionId} onSelectSection={setActiveSectionId} />
      
      <main className="flex-1 h-full overflow-y-auto p-8 lg:p-12 scroll-smooth">
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
          
          {/* Header Section */}
          <header className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="flex items-center space-x-3 text-blue-600 mb-2">
              <activeData.icon size={32} />
              <span className="text-sm font-bold uppercase tracking-widest">Modulo Didattico</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              {activeData.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed font-light">
              {activeData.summary}
            </p>
          </header>

          <hr className="border-slate-200" />

          {/* Deep Dive / Chronology Section */}
          <section className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-3 mb-4 text-blue-800">
              <BookOpen size={24} />
              <h3 className="text-xl font-bold">Approfondimento e Filo Conduttore</h3>
            </div>
            <p className="text-slate-800 text-lg leading-relaxed text-justify">
              {activeData.deepDive}
            </p>
          </section>

          {/* Comparison Grid */}
          <section className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                Evoluzione Tecnologica
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Traditional Tech Column */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-sm">1.0</span>
                  <h4 className="text-lg font-semibold text-slate-500 uppercase tracking-wider">Ieri: Adattamento</h4>
                </div>
                <div className="grid gap-4">
                  {activeData.traditionalTech.map((item, idx) => (
                    <TechCard key={idx} item={item} />
                  ))}
                  {activeData.traditionalTech.length === 0 && (
                    <div className="p-8 text-center text-slate-400 italic border border-dashed border-slate-300 rounded-xl">
                      Nessuna tecnologia rilevante pre-AI per questa sezione.
                    </div>
                  )}
                </div>
              </div>

              {/* Modern Tech Column */}
              <div className="space-y-6">
                 <div className="flex items-center space-x-2 mb-4">
                  <span className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">2.0</span>
                  <h4 className="text-lg font-semibold text-emerald-600 uppercase tracking-wider">Oggi: Inclusione & AI</h4>
                </div>
                <div className="grid gap-4">
                  {activeData.modernTech.map((item, idx) => (
                    <TechCard key={idx} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Key Details / Takeaways */}
          <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Info size={20} className="text-blue-500" />
              Focus Didattico
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {activeData.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700">
                  <ArrowRight size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                  <span className="leading-relaxed font-medium">{detail}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Interactive AI Assistant */}
          <GeminiAssistant topic={activeData.title} />

        </div>
      </main>
    </div>
  );
}