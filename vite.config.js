import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    // Defined without path as the assets are embedded within a Laravel project
    base: '',
    plugins: [
        // Laravel vite plugin allows for referenccing in
        // resources/views/layouts/default.blade.php
        laravel([
            'resources/css/braid.css',
            'resources/js/braid.js',
        ]),
    ],
    resolve: {
        alias: {
            '@lib': '/resources/js/lib',
            '@utils': '/resources/js/lib/utils',
            '@components': '/resources/js/components',
            '@': '/resources/js',
        }
    },
});