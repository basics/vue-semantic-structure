import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: process.env.BASE_URL || '/',
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    include: ['test/*.test.ts'],
    testTimeout: 60_000,
    hookTimeout: 140_000
  }
});
