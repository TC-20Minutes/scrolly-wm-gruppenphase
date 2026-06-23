import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// Lokal (dev/preview ohne Flag) unter '/', der Produktions-Build für GitHub Pages
// unter '/scrolly-wm-gruppenphase/'. Anpassen, falls das Repo anders heisst.
export default defineConfig(({ command }) => ({
    base: command === 'build' ? '/scrolly-wm-gruppenphase/' : '/',
    plugins: [svelte()]
}));
