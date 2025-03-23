// `shiki/core` entry does not include any themes or languages or the wasm binary.
import { createHighlighter } from 'shiki';

// directly import the theme and language modules, only the ones you imported will be bundled.
import solarizedDark from 'shiki/themes/solarized-dark.mjs';
import solarizedLight from 'shiki/themes/solarized-light.mjs';

export default async function highlightCode(code, lang = 'blade') {
    const highlighter = await createHighlighter({
        themes: [
            solarizedDark,
            solarizedLight
        ],
        langs: [
            import('shiki/langs/blade.mjs')
        ],
        loadWasm: import('shiki/wasm')
    });

    return highlighter.codeToHtml(code, {
        lang,
        themes: {
            light: 'solarized-light',
            dark: 'solarized-dark'
        }
    });
}
