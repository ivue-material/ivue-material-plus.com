import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [vue(), vueJsx()],
  // 公共基础路径
  base: isProduction ? 'https://cdn.lovevuerk.com/plus/' : '/plus/',
  // resolve
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    // 指定输出路径
    outDir: 'plus',
  },
});
