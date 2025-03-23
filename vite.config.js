import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import eslint from 'vite-plugin-eslint';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    // Defined without path as the assets are embedded within a Laravel project
    base: '',
    plugins: [
        // https://www.npmjs.com/package/vite-plugin-eslint
        eslint({
            cache: true // In beta, may not always work!
        }),
        // Laravel vite plugin allows for referencing in
        // resources/views/layouts/default.blade.php
        laravel([
            'resources/css/braid.css',
            'resources/js/braid.js',
        ]),
        tailwindcss()
    ],
    server: {
        cors: true
    },
    resolve: {
        alias: {
            '@lib': '/resources/js/lib',
            '@utils': '/resources/js/utils',
            '@components': '/resources/js/components',
            '@': '/resources/js',
        }
    },
    css: {
        devSourcemap: true
    },
    build: {
        // WASM/Shiki is pretty weighty so allow a larger size
        chunkSizeWarningLimit: 650
    }
});
