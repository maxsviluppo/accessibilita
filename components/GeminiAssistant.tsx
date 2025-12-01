import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { askGeminiAssistant } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

interface GeminiAssistantProps {
  topic: string;
}

export const GeminiAssistant: React.FC<GeminiAssistantProps> = ({ topic }) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;
    setIsLoading(true);
    setResponse(null);
    const result = await askGeminiAssistant(topic, query);
    setResponse(result);
    setIsLoading(false);
  };

  return (
    <div className="mt-10 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-blue-100 overflow-hidden shadow-sm">
      <div className="bg-blue-600 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-white">
          <Sparkles size={20} className="animate-pulse" />
          <h3 className="font-semibold text-lg">Assistente Docente AI</h3>
        </div>
        <span className="text-xs text-blue-100 bg-blue-700 px-2 py-1 rounded-full border border-blue-500">Gemini Powered</span>
      </div>
      
      <div className="p-6">
        <p className="text-slate-600 text-sm mb-4">
          Hai bisogno di un esempio pratico, un approfondimento o una spiegazione alternativa su <strong>{topic}</strong>? Chiedi qui.
        </p>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
            placeholder="Es: 'Fammi un esempio di eye tracking nel gaming' o 'Spiega come funziona la lettura immersiva'"
            className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 placeholder-slate-400 bg-white"
          />
          <button
            onClick={handleAsk}
            disabled={isLoading || !query.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl transition-colors flex items-center justify-center min-w-[60px]"
          >
            {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
          </button>
        </div>

        {response && (
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="prose prose-sm prose-slate max-w-none">
              <ReactMarkdown>{response}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};