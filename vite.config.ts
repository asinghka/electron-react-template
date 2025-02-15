import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Use relative paths for assets
  plugins: [
      react()
  ],
  build: {
    outDir: 'dist', // Optional, defines the output directory
  },
});