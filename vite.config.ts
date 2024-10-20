import path from 'node:path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@':            path.resolve(__dirname, 'src'),
            '@/assets':     path.resolve(__dirname, 'src/assets'),
            '@/components': path.resolve(__dirname, 'src/components'),
            '@/router':     path.resolve(__dirname, 'src/router'),
            '@/views':      path.resolve(__dirname, 'src/views'),
        }
    }
})
