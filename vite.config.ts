import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import vitest from 'vitest';

const testConfig: vitest.InlineConfig = {
  globals: true,
  environment: 'jsdom',
  setupFiles: './src/tests/setup.ts',
};

export default defineConfig({
  plugins: [react()],
  test: testConfig,
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
});
