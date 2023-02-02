/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from './config/unocss';

const rollupOptions = {
    external: ['vue', 'vue-router'],
    output: {
        globals: {
            vue: 'Vue',
        },
    },
  };

// https://vitejs.dev/config/

export default defineConfig({
    plugins: [
        vue(),
        vueJsx({}),
        // 添加UnoCSS插件
        Unocss(),
    ],
    build: {
        rollupOptions,
        minify: false,
        cssCodeSplit: true, // 单独导出css
        lib: {
            entry: './packages/entry.ts',
            name: 'SmartyUI',
            fileName: 'smarty-ui',
            // 导出模块格式
            formats: ['esm', 'umd', 'iife'],
        },
    },
    test: {
        // enable jest-like global test APIs
        globals: true,
        // simulate DOM with happy-dom
        // (requires installing happy-dom as a peer dependency)
        environment: 'happy-dom',
        // 支持tsx组件，很关键
        transformMode: {
            web: [/.[tj]sx$/]
        }
    }
});