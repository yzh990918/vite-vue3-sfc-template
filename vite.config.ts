import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VitePluginComponents from 'vite-plugin-components';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePluginComponents()],
  base: './',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 8080,
    cors: true,
  },
});
