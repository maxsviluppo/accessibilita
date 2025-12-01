import { GoogleGenAI } from "@google/genai";

// Inizializzazione sicura: non crashare l'intera app se manca la chiave o l'ambiente è strano.
let ai: GoogleGenAI | null = null;

try {
  // @ts-ignore - process.env è gestito da Vite define, ma TS potrebbe lamentarsi
  const apiKey = process.env.API_KEY;
  if (apiKey) {
    ai = new GoogleGenAI({ apiKey: apiKey });
  } else {
    console.warn("API Key mancante: L'assistente AI non funzionerà, ma il resto dell'app sì.");
  }
} catch (error) {
  console.error("Errore inizializzazione Gemini:", error);
}

export const askGeminiAssistant = async (topic: string, query: string): Promise<string> => {
  if (!ai) {
    return "⚠️ Chiave API non configurata. L'assistente AI non è disponibile in questa demo statica.";
  }

  try {
    const model = "gemini-2.5-flash";
    const prompt = `
      Sei un esperto mondiale di Tecnologie Assistive e Accessibilità Digitale.
      Stai assistendo un docente durante una lezione.
      
      Argomento corrente: ${topic}
      Domanda del docente: ${query}
      
      Rispondi in modo conciso (max 150 parole), professionale ma coinvolgente. 
      Fornisci esempi concreti di tecnologie reali (software, hardware, app) se pertinente.
      Formatta la risposta in Markdown semplice (usa grassetto e liste puntate).
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Nessuna risposta generata.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Si è verificato un errore durante la comunicazione con l'assistente AI. Verifica la console per dettagli.";
  }
};