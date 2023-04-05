<script>
    import { browser } from '$app/environment';
    import '../../rotations.css';
    import moment from 'moment'
    /** @type {import('./$types').PageData} */  export let data;
    import Meta from '../../../Meta.svelte';
    import Icons from '../../Icons.svelte';
    import { fade } from 'svelte/transition';

    let skin;
    let selected;
    let champId = 1;
    let modalActivated = false;

    async function modal(skinData)
    {
      const res = await fetch(`/api/lol/${skinData.id}`)
      const data = await res.json();

      modalActivated = true;
      skin = data.data;
      selected = skinData;

      console.log(skin)

      champId = skinData.championId
    }


    let skinLine;
    let skinsData = [];

    async function skins()
    {
        const res = await fetch('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/skinlines.json')
        const info = await res.json();

        for(let i = 0; i < info.length; i++)
        {
            if(info[i].name == data.name)
            {
                skinLine = info[i];
                console.log(skinLine)
                break;
            }
        }

        const res1 = await fetch('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/skins.json')
        const info1 = await res1.json();

        for (const [key, value] of Object.entries(info1)) {
            if(info1[key].skinLines != null && info1[key].skinLines[info1[key].skinLines.length - 1].id == skinLine.id)
            {
                skinsData.push(info1[key]);
            }
        }

    }


</script>

<Meta titleSuffix={skinLine.name} description={skinLine.description}/>




{#await skins()}
Loading...
{:then}
<h1 class=' text-center text-4xl uppercase'>{skinLine.name}</h1>
<h1 class='text-center text-lg uppercase' style="font-family: 'Inter'">{skinLine.description}</h1>
<div class='skins'>

{#if modalActivated}
<div class='modal' style="background-image: url('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/{skin.info.id.toString().slice(0, -3)}/{skin.info.id}.jpg')" in:fade="{{duration: 200}}" out:fade="{{duration: 200}}">
<button class='modal-close' on:click={() => modalActivated=false}>X</button>
<div class='modal-column' id='m0'>
    <h1 class='text-2xl uppercase font-extrabold'>{skin.name} <Icons size=30 icon={skin.info.rarity} /></h1>
    {#if skin.info.rarity != 'Mythic'}
    <span><Icons size=15 /> {skin.info.cost}</span>
    {:else}
    <span><Icons size=15 icon='ME' /> {skin.info.distribution}</span>
    {/if}
    {#if skin.sale.length > 0}
    <span>LAST TIME ON SALE: {moment(skin.sale[skin.sale.length - 1].skins[0].dates.startDate).format("MMMM Do YYYY")}</span>
    {/if}
    <span>SKINLINE: <a href='/lol/skinline/{encodeURIComponent(skin.info.set[0])}'><i>{skin.info.set[0]}</i></a></span>
</div>

<div class='modal-column' id='m1'>

</div>

<div class='modal-column' id='m2'>
  <span>
    {#if skin.info.chromas.length > 0 } <Icons size=30 icon='chromas' /> {/if}
  </span>
  <span class='uppercase'>ARTIST: {skin.info.splashArtist[0] || 'Unknown'}</span>
  <span class='font-light uppercase pl-3'>
    <ul class='list-disc text-left'>
    {#if skin.info.newEffects } <li>New Effects</li> {/if}
    {#if skin.info.newAnimations } <li>New Animations</li> {/if}
    {#if skin.info.newVoice } <li>New Voice</li> {/if}
    {#if skin.info.newQuotes } <li>New Quotes</li> {/if}
    </ul>
</span> 
</div>
  
</div>
{/if}
<div class='skins-col'>
{#each skinsData as name}
<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="skin" style="background-image: url('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/{name.id.toString().slice(0, -3)}/{name.id}.jpg')" on:click={() => modal(name)}>
  <span class="skinInfo">{name.name} <br> 

</div>
{/each}

</div>

</div>
{/await}
