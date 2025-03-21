import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["country-state-city"],
  },
  build: {
    rollupOptions: {
      external: ["country-state-city"],
    },
  },
});
