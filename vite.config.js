import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    host: '0.0.0.0',       // Listen on all interfaces
    strictPort: true,       // Keep port consistent
    hmr: {
      host: '192.168.0.2' // Replace with your actual LAN IP
    }
  },
  plugins: [react()]
});