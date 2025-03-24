import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        app_remota: 'http://localhost:5173/remoteEntry.js', // URL correcta de la app remota
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    rollupOptions: {
      input: './index.html', // Archivo de entrada especificado
    },
  },
});
