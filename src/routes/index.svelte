<script lang="ts">
    import {t, locale, loadTranslations} from "../lib/translations"

    async function onStart(){
        const defaultLocale = "sl";
        const initLocale = locale.get() || defaultLocale
        await loadTranslations(initLocale, "/")
    }

    onStart()
</script>


<h1>Welcome to SvelteKit</h1>
<h2>{$t('home.test')}</h2>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
