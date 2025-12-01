import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carica le variabili d'ambiente in modo sicuro
  // Usiamo process.cwd() se disponibile, altrimenti fallback
  const cwd = typeof process !== 'undefined' && (process as any).cwd ? (process as any).cwd() : '.';
  const env = loadEnv(mode, cwd, '');

  return {
    plugins: [react()],
    // CRITICO: 'base: "./"' dice al browser di cercare i file (js, css) 
    // nella cartella corrente e non alla radice del dominio. 
    // Fondamentale per GitHub Pages che spesso gira in sottocartelle.
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