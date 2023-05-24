<script>
// @ts-nocheck

    import { browser } from '$app/environment';
    import Loader from '../../Loader.svelte';
    import { page } from '$app/stores'
    import { fade } from 'svelte/transition';
    import Card from './card.svelte'
    import { onMount } from 'svelte';

    import html2canvas from 'html2canvas'

    import * as htmlToImage from 'html-to-image';
    import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

    import './styles.css'

    /** @type {import('./$types').PageData} */  export let data;

    let user = {};
    let selected = "";
    const cdn = "/images/hsr/"

    async function loadData()
    {
      const res = await fetch(`/api/hsr/${data.id}`)
      user = await res.json()

        if($page.url.searchParams.get('character'))
        {
            selected = user.characters[$page.url.searchParams.get('character') <= 4 ? $page.url.searchParams.get('character') - 1 : 0];
        }
        else
        {
            selected = user.characters[0]
        }


        if($page.url.searchParams.get('render') == "true")
        {
            setTimeout(() => render(), 1200);
        }

    }

    function handleHover(event, item)
    {
        selected = item;
        
    }

    function render()
    {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const image = new Image();

        html2canvas(document.getElementById("card"), {backgroundColor: null}).then(canvas => {
        //document.body.appendChild(canvas)

        var base64URL = canvas.toDataURL('image/png');

        console.log(base64URL);

        window.open(base64URL, "_blank")

        document.getElementById('link-var').innerText = base64URL;


        })};



    import Meta from '../../Meta.svelte';
</script>


{#await loadData()}
<Loader />
{:then}

<Meta titleSuffix={user.player.name} description='Honkai Star Rail Profile Card'/>
<div class='flex flex-row justify-between gap-5 mb-12 flex-wrap content-center'>
    <div class='flex flex-row shrink-0 gap-5'>
    <div class='w-36 h-36 rounded-3xl relative py-2'>
        <div class='absolute bg-blue-400 w-12 h-6 bottom-0 m-auto left-0 right-0 inter font-bold font-lg text-center rounded-3xl'>{user.player.level}</div>
        <div class='w-32 h-32 avatar bg-white rounded-3xl absolute bottom-0 top-0 m-auto left-0 right-0 -z-10' style="background-image: url('{cdn + user.player.icon}')"></div>
    </div>
    <div class='flex flex-col '>
    <h1 class='text-4xl'>{user.player.name}</h1>
    {#if user.player.signature.length > 0}
    <h1 class='small-quote'>"{user.player.signature}"</h1>
    {/if}
    </div>
    </div>

    <div class='h-36 rounded-3xl shrink-0 content-center'>
        <div class='flex flex-row gap-5 items-center content-center'>
        {#each user.characters as character}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class='char-circle' style="background-image: url('{cdn + "icon/avatar/" + character.id + ".webp"}')" on:click={() => handleHover(event, character)}></div>
        {/each}
        </div>
    </div>
</div>

{#await selected then xdd}
<Card selected={selected} user={user} cdn={cdn} />
<button on:click={render} id="przycisk">Screenshot</button>
{/await}

{:catch}
This user doesn't exist.


{/await}

<div id='link-var' class='hidden'>XDDDD</div>
