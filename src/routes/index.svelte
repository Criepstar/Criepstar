
<script lang="ts" context="module">
    import axios from "axios"
import { each } from "svelte/internal";
    export async function load(){
        try{
            const data = await axios.get("https://preview.pesmarica.at/data")
            if(data){
                return{
                props:{
                    data: data.data
                }
            } 
            }else{
                return{
                    props:{
                        error: true
                    }
                }
            }
        }catch(err){
            return {
                props:{
                    error: true
                }
            }
        }
    }
</script>

<script lang="ts">
    import {t, locale, loadTranslations} from "../lib/translations"

    export let data;

    async function onStart(){
        const defaultLocale = "sl";
        const initLocale = locale.get() || defaultLocale
        await loadTranslations(initLocale, "/")
    }

    onStart()
</script>

<svelte:head>
    <title>Pesmarica - Slovenska besedila in note</title>
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<h2>{$t('home.test')}</h2>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{#each data as document}
    <p>{document.data.title}  {document.id}</p>
{/each}