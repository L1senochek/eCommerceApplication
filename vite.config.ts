import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import vitest from 'vitest';
import path from 'path';

const testConfig: vitest.InlineConfig = {
  globals: true,
  environment: 'jsdom',
  setupFiles: './src/tests/setup.ts',
};

export default defineConfig({
  plugins: [react()],
  test: testConfig,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
});
