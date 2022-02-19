<script lang="ts" context="module">
    import axios from "axios"
import { each } from "svelte/internal";
    export async function load({params}){
        try{
            const data = await axios.get("https://preview.pesmarica.at/data?id="+params.id)
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

<script>
    export let data;
    const pageTitle = data.data.title + " - Besedilo - Pesmarica"
</script>

<svelte:head>
    <title>{pageTitle}</title>
</svelte:head>

<div class="text-center mx-auto px-4 my-4" style="max-width: 400px;">
    <h1 class="text-3xl font-bold">{data.data.title}</h1>
    {#if data.data.author.music}
    <h2 class="text-gray-600 mt-2 font-light">{data.data.author.music}</h2>
    <h2 class="text-gray-600 mt-2 font-light">{data.data.author.lyrics}</h2>
    {/if}
    {#if !data.data.author.music}
    <h2 class="text-gray-600 mt-2 font-light">{data.data.author.author}</h2>
    {/if}
    <p style="font-size: 1.25rem; line-height:1.5rem;" class="mt-2 whitespace-pre-wrap">{data.data.text}</p>
</div>