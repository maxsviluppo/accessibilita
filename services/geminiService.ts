import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const askGeminiAssistant = async (topic: string, query: string): Promise<string> => {
  if (!apiKey) return "API Key non configurata. Impossibile contattare l'assistente.";

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
    return "Si è verificato un errore durante la comunicazione con l'assistente AI.";
  }
};