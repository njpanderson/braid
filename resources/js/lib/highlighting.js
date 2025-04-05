// `shiki/core` entry does not include any themes or languages or the wasm binary.
import { createHighlighterCore } from 'shiki/core';
import { createOnigurumaEngine } from 'shiki/engine/oniguruma';

// directly import the theme and language modules, only the ones you imported will be bundled.
import solarizedDark from 'shiki/themes/solarized-dark';
import solarizedLight from 'shiki/themes/solarized-light';

export default async function highlightCode(code, lang = 'blade') {
    const highlighter = await createHighlighterCore({
        themes: [
            solarizedDark,
            solarizedLight
        ],
        langs: [
            import('shiki/langs/blade.mjs')
        ],
        engine: createOnigurumaEngine(import('shiki/wasm'))
    });

    return highlighter.codeToHtml(code, {
        lang,
        themes: {
            light: 'solarized-light',
            dark: 'solarized-dark'
        }
    });
}
