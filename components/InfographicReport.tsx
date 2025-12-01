import React from 'react';
import { LESSON_DATA } from '../constants';
import { SectionType } from '../types';
import { Printer, ArrowRight, History, Zap, Cpu, Network, Share2, BookOpen, Info, CheckCircle2 } from 'lucide-react';

export const InfographicReport: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  // Filter out the report section itself so we don't print it recursively
  const modules = LESSON_DATA.filter(s => s.id !== SectionType.SUMMARY_REPORT);
  
  // Group modules for the comparison infographic
  const comparisonGroup1 = modules.filter(m => [SectionType.VISUAL, SectionType.AUDITORY].includes(m.id));
  const comparisonGroup2 = modules.filter(m => [SectionType.MOTOR, SectionType.COGNITIVE].includes(m.id));
  const aiModule = modules.find(m => m.id === SectionType.AI_FUTURE);

  const totalModulePages = modules.length;
  const totalPages = totalModulePages + 4; // Cover + Index + Modules + 2 Summary Pages

  return (
    <div className="flex flex-col items-center bg-slate-200 min-h-screen py-8 overflow-y-auto font-sans print:bg-white print:p-0">
      
      {/* Control Bar */}
      <div className="w-full max-w-[210mm] mb-8 flex justify-between items-center bg-white p-4 rounded-xl shadow-md print:hidden">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Guida Docente Completa</h2>
          <p className="text-sm text-slate-500">Genera un PDF con Copertina, Indice, Moduli e Infografica finale.</p>
        </div>
        <button 
          onClick={handlePrint}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors font-medium shadow-sm shadow-blue-200"
        >
          <Printer size={20} />
          Salva come PDF
        </button>
      </div>

      {/* ====================== PAGE 1: COVER ====================== */}
      <div className="bg-slate-900 w-[210mm] h-[297mm] relative shadow-2xl print:shadow-none print:w-full print:h-screen print:break-after-page overflow-hidden flex flex-col text-white mb-8 print:mb-0">
        
        {/* Abstract Background Art */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-600 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-indigo-600 blur-[120px]"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.1 }}></div>
          
          {/* Network Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <line x1="10%" y1="10%" x2="50%" y2="50%" stroke="white" strokeWidth="1" />
            <line x1="90%" y1="20%" x2="50%" y2="50%" stroke="white" strokeWidth="1" />
            <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="white" strokeWidth="1" />
            <circle cx="50%" cy="50%" r="4" fill="white" />
            <circle cx="10%" cy="10%" r="4" fill="white" />
            <circle cx="90%" cy="20%" r="4" fill="white" />
            <circle cx="20%" cy="80%" r="4" fill="white" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col h-full p-[20mm]">
          {/* Top Bar */}
          <div className="flex justify-between items-center border-b border-slate-700 pb-6 mb-auto">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Network size={20} className="text-white" />
              </div>
              <span className="font-bold tracking-widest uppercase text-sm">Digital Inclusion Lab</span>
            </div>
            <span className="text-slate-400 text-sm">Anno Accademico 2024/2025</span>
          </div>

          {/* Center Title */}
          <div className="my-auto">
            <div className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/50 rounded-full text-blue-300 text-sm font-semibold mb-6">
              Guida Docente Avanzata
            </div>
            <h1 className="text-7xl font-black leading-tight tracking-tight mb-8">
              Accessibilità <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">2.0 & AI</span>
            </h1>
            <p className="text-2xl text-slate-300 font-light max-w-lg leading-relaxed mb-8">
              Dall'adattamento all'inclusione nativa.
              Come l'Intelligenza Artificiale sta riscrivendo le regole dell'accessibilità.
            </p>
            
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <p className="text-slate-400 text-sm uppercase tracking-widest font-bold mb-1">A cura di</p>
              <p className="text-3xl text-white font-serif italic">Castro Massimo</p>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-auto pt-12 border-t border-slate-700 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-slate-500 text-xs font-bold uppercase mb-2">Modulo Didattico</h3>
              <p className="text-lg font-semibold">Tecnologie Assistive</p>
            </div>
            <div>
              <h3 className="text-slate-500 text-xs font-bold uppercase mb-2">Focus</h3>
              <p className="text-lg font-semibold">AI, IoT, Neural Interfaces</p>
            </div>
          </div>
        </div>
      </div>

      {/* ====================== PAGE 2: INDICE & INTRO ====================== */}
      <div className="bg-white w-[210mm] h-[297mm] p-[20mm] relative shadow-2xl print:shadow-none print:w-full print:h-screen print:break-after-page flex flex-col mb-8 print:mb-0">
        <header className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-2">Indice dei Contenuti</h2>
          <div className="h-1 w-20 bg-blue-600"></div>
        </header>

        <div className="flex-1 space-y-8">
          {/* Context Block */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-10">
            <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <Share2 size={18} className="text-blue-500" />
              Obiettivo della Guida
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed text-justify">
              Questo documento accompagna il docente attraverso l'evoluzione delle tecnologie per la disabilità.
              Ogni modulo mette a confronto l'approccio "tradizionale" (spesso medico e costoso) con quello "moderno"
              (inclusivo, basato su AI e consumer tech). L'obiettivo è fornire una visione chiara di come il mondo digitale
              stia abbattendo barriere che sembravano insormontabili.
            </p>
          </div>

          {/* TOC List */}
          <div className="space-y-4">
            {modules.map((section, idx) => (
              <div key={idx} className="flex items-baseline justify-between group cursor-default">
                <div className="flex items-center gap-4">
                  <span className="text-slate-300 font-mono text-sm">0{idx + 1}</span>
                  <span className="text-slate-800 font-semibold text-lg">
                    {section.title}
                  </span>
                </div>
                <div className="flex-1 mx-4 border-b border-dotted border-slate-300 relative top-[-6px]"></div>
                <span className="text-slate-500 font-mono text-sm">
                  Pag. {idx + 3}
                </span>
              </div>
            ))}
            {/* Infographic Entry */}
             <div className="flex items-baseline justify-between group cursor-default mt-8">
                <div className="flex items-center gap-4">
                  <span className="text-blue-300 font-mono text-sm">--</span>
                  <span className="text-blue-800 font-bold text-lg">
                    Sintesi Comparativa (Infografica)
                  </span>
                </div>
                <div className="flex-1 mx-4 border-b border-dotted border-blue-300 relative top-[-6px]"></div>
                <span className="text-blue-600 font-mono text-sm">
                  Pag. {totalModulePages + 3}
                </span>
              </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
           <span>Accessibilità 2.0 - Castro Massimo</span>
           <span>Pagina 2</span>
        </div>
      </div>

      {/* ====================== MODULE PAGES (DYNAMIC) ====================== */}
      {modules.map((section, idx) => (
        <div key={section.id} className="bg-white w-[210mm] h-[297mm] p-[15mm] shadow-2xl print:shadow-none print:w-full print:h-screen print:break-after-page relative overflow-hidden flex flex-col mb-8 print:mb-0">
          
          {/* Module Header */}
          <header className="mb-8 border-b-4 border-slate-100 pb-4 flex justify-between items-start">
            <div className="flex gap-4">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
                <section.icon size={32} />
              </div>
              <div>
                <p className="text-slate-400 font-bold tracking-widest uppercase text-xs mb-1">Modulo 0{idx + 1}</p>
                <h1 className="text-3xl font-black text-slate-900 leading-tight max-w-lg">
                  {section.title}
                </h1>
              </div>
            </div>
            <div className="text-6xl font-black text-slate-100">{idx + 3}</div>
          </header>

          {/* Deep Dive Section */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-3">
              <BookOpen size={20} className="text-blue-500" />
              Filo Conduttore
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed text-justify bg-slate-50 p-5 rounded-xl border border-slate-100">
              {section.deepDive}
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="flex-1 grid grid-cols-2 gap-6 mb-8">
            
            {/* Traditional Column */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <div className="flex items-center gap-2 mb-4 text-slate-500 border-b border-slate-200 pb-2">
                <History size={18} />
                <h4 className="font-bold text-xs uppercase tracking-widest">Tecnologia Ieri</h4>
              </div>
              <div className="space-y-4">
                {section.traditionalTech.length > 0 ? (
                  section.traditionalTech.map((item: any, i: number) => (
                    <div key={i}>
                      <p className="font-bold text-slate-700 text-sm">{item.name}</p>
                      <p className="text-xs text-slate-500 leading-snug mt-0.5">{item.description}</p>
                    </div>
                  ))
                ) : (
                   <p className="text-xs text-slate-400 italic">Nessuna tecnologia rilevante precedente.</p>
                )}
              </div>
            </div>

            {/* Modern Column */}
            <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100 relative overflow-hidden">
               {/* Decorative bg icon */}
               <div className="absolute -bottom-4 -right-4 text-emerald-100 opacity-50">
                  <Zap size={80} />
               </div>

              <div className="flex items-center gap-2 mb-4 text-emerald-600 border-b border-emerald-200 pb-2 relative z-10">
                <Zap size={18} />
                <h4 className="font-bold text-xs uppercase tracking-widest">Tecnologia Oggi</h4>
              </div>
              <div className="space-y-4 relative z-10">
                {section.modernTech.map((item: any, i: number) => (
                  <div key={i}>
                    <p className="font-bold text-slate-900 text-sm">{item.name}</p>
                    <p className="text-xs text-slate-600 leading-snug mt-0.5">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Focus Details */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 mb-auto">
            <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Info size={16} className="text-blue-500" />
              Punti Chiave
            </h3>
            <ul className="grid grid-cols-2 gap-4">
              {section.details.map((detail: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                  <ArrowRight size={12} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-4 flex justify-between items-center text-xs text-slate-400 border-t border-slate-100">
            <span>Accessibilità 2.0 - Castro Massimo</span>
            <span>Pagina {idx + 3}</span>
          </div>
        </div>
      ))}

      {/* ====================== SUMMARY INFOGRAPHIC PAGE 1 (SENSORY) ====================== */}
      <div className="bg-slate-900 w-[210mm] h-[297mm] p-[15mm] shadow-2xl print:shadow-none print:w-full print:h-screen print:break-after-page relative overflow-hidden flex flex-col mb-8 print:mb-0 text-white">
        <header className="mb-8 flex justify-between items-end border-b border-slate-700 pb-4">
          <div>
             <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
               Sintesi Comparativa
             </h2>
             <p className="text-slate-400 text-sm mt-1">L'evoluzione tecnologica per le disabilità sensoriali</p>
          </div>
          <span className="text-slate-600 font-mono">1/2</span>
        </header>

        <div className="flex-1 flex flex-col gap-8">
           {comparisonGroup1.map((section) => (
             <div key={section.id} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
               <div className="flex items-center gap-3 mb-6">
                 <div className="p-2 bg-blue-600 rounded-lg"><section.icon size={24} className="text-white" /></div>
                 <h3 className="text-xl font-bold text-white">{section.title}</h3>
               </div>
               
               <div className="grid grid-cols-2 gap-8 relative">
                 {/* Divider Line */}
                 <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-700 -translate-x-1/2"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 p-1 rounded-full border border-slate-600">
                   <ArrowRight size={16} className="text-slate-400" />
                 </div>

                 {/* Traditional */}
                 <div className="pr-4">
                   <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 text-right">Passato</h4>
                   <ul className="space-y-3">
                     {section.traditionalTech.map((t, i) => (
                       <li key={i} className="text-right">
                         <strong className="text-slate-300 block text-sm">{t.name}</strong>
                         <span className="text-slate-500 text-xs">{t.description.substring(0, 60)}...</span>
                       </li>
                     ))}
                   </ul>
                 </div>

                 {/* Modern */}
                 <div className="pl-4">
                   <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">Futuro</h4>
                   <ul className="space-y-3">
                     {section.modernTech.map((t, i) => (
                       <li key={i}>
                         <strong className="text-emerald-100 block text-sm flex items-center gap-2">
                           {t.name}
                         </strong>
                         <span className="text-slate-400 text-xs">{t.description.substring(0, 60)}...</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
             </div>
           ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4 flex justify-between items-center text-xs text-slate-600 border-t border-slate-800">
            <span>Accessibilità 2.0 - Castro Massimo</span>
            <span>Pagina {totalModulePages + 3}</span>
        </div>
      </div>

       {/* ====================== SUMMARY INFOGRAPHIC PAGE 2 (PHYSICAL/COGNITIVE) ====================== */}
       <div className="bg-slate-900 w-[210mm] h-[297mm] p-[15mm] shadow-2xl print:shadow-none print:w-full print:h-screen print:break-after-page relative overflow-hidden flex flex-col mb-8 print:mb-0 text-white">
        <header className="mb-8 flex justify-between items-end border-b border-slate-700 pb-4">
          <div>
             <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
               Sintesi Comparativa
             </h2>
             <p className="text-slate-400 text-sm mt-1">Fisicità, Cognizione e la Rivoluzione AI</p>
          </div>
          <span className="text-slate-600 font-mono">2/2</span>
        </header>

        <div className="flex-1 flex flex-col gap-6">
           {comparisonGroup2.map((section) => (
             <div key={section.id} className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 bg-emerald-600 rounded-lg"><section.icon size={20} className="text-white" /></div>
                 <h3 className="text-lg font-bold text-white">{section.title}</h3>
               </div>
               
               <div className="grid grid-cols-2 gap-8 relative">
                 <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-700 -translate-x-1/2"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 p-1 rounded-full border border-slate-600">
                   <ArrowRight size={14} className="text-slate-400" />
                 </div>

                 <div className="pr-4">
                   <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 text-right">Passato</h4>
                   <ul className="space-y-2">
                     {section.traditionalTech.map((t, i) => (
                       <li key={i} className="text-right">
                         <strong className="text-slate-300 block text-xs">{t.name}</strong>
                         <span className="text-slate-500 text-[10px]">{t.description.substring(0, 50)}...</span>
                       </li>
                     ))}
                   </ul>
                 </div>

                 <div className="pl-4">
                   <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-2">Futuro</h4>
                   <ul className="space-y-2">
                     {section.modernTech.map((t, i) => (
                       <li key={i}>
                         <strong className="text-emerald-100 block text-xs">{t.name}</strong>
                         <span className="text-slate-400 text-[10px]">{t.description.substring(0, 50)}...</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
             </div>
           ))}

           {/* AI Spotlight Section */}
           {aiModule && (
             <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-6 border border-blue-700 mt-2 relative overflow-hidden">
                <div className="absolute right-0 top-0 p-4 opacity-10">
                  <Cpu size={100} />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Cpu size={24} className="text-blue-400" />
                  <h3 className="text-xl font-bold text-white">La Rivoluzione GenAI</h3>
                </div>
                <p className="text-blue-200 text-sm mb-4 leading-relaxed max-w-lg">
                  L'AI non è solo un "nuovo strumento", ma un cambio di paradigma. 
                  Passiamo da software che devono essere imparati a software che imparano l'utente.
                </p>
                <div className="grid grid-cols-3 gap-4">
                   {aiModule.modernTech.map((t, i) => (
                     <div key={i} className="bg-blue-950/50 p-3 rounded-lg border border-blue-800">
                       <p className="text-blue-300 font-bold text-xs mb-1">{t.name}</p>
                       <p className="text-slate-400 text-[10px] leading-tight">{t.description}</p>
                     </div>
                   ))}
                </div>
             </div>
           )}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4 flex justify-between items-center text-xs text-slate-600 border-t border-slate-800">
            <span>Accessibilità 2.0 - Castro Massimo</span>
            <span>Pagina {totalModulePages + 4}</span>
        </div>
      </div>

    </div>
  );
};
