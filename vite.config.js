import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
    // Defined without path as the assets are embedded within a Laravel project
    base: '',
    plugins: [
        // Laravel vite plugin allows for referenccing in
        // resources/views/layouts/default.blade.php
        laravel([
            'resources/css/braid.scss',
            'resources/js/braid.js',
        ]),
        // https://www.npmjs.com/package/vite-plugin-eslint
        eslint({
            cache: true // In beta, may not always work!
        })
    ],
    resolve: {
        alias: {
            '@lib': '/resources/js/lib',
            '@utils': '/resources/js/lib/utils',
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