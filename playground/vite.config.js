import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  base: getBaseUrl(),

  plugins: [vue()],

  server: {
    port: 3000
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'vue-structural-headings': path.resolve(__dirname, '../src')
    }
  }
});

function getBaseUrl() {
  return process.env.npm_config_base_url || process.env.BASE_URL || '/';
}
