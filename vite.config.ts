import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carica le variabili d'ambiente in modo sicuro
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    // CRITICO: 'base: "./"' dice al browser di cercare i file (js, css) 
    // nella cartella corrente e non alla radice del dominio. 
    // Fondamentale per GitHub Pages.
    base: './', 
    define: {
      // Sostituisce process.env.API_KEY con il valore reale (o stringa vuota) durante la build
      // Previene il crash "process is not defined" nel browser
      'process.env.API_KEY': JSON.stringify(env.API_KEY || ''),
      // Per sicurezza, definiamo un oggetto vuoto per altre chiamate a process.env
      'process.env': {}
    }
  };
});