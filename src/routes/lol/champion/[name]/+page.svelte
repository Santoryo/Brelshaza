<script>
    import { browser } from '$app/environment';
    import '../../rotations.css';
    import moment from 'moment'
    /** @type {import('./$types').PageData} */  export let data;
    import Meta from '../../../Meta.svelte';
    import Icons from '../../Icons.svelte';
    import { fade } from 'svelte/transition';
    import Loader from '../../../Loader.svelte';

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

      champId = skinData.championId
    }

    let skinsData = [];


    skinsData = data.champ.skins;

    const _data = data;
        


    


</script>

<Meta titleSuffix={_data.champ.name} description={_data.champ.title}/>




{#await data}
<Loader />
{:then}
<h1 class=' text-center text-4xl uppercase'>{_data.champ.name}</h1>
<h1 class='text-center text-lg uppercase' style="font-family: 'Inter'">{_data.champ.title}</h1>
<h1 class='text-center text-md uppercase' style="font-family: 'Inter'">LAST SKIN {moment(skinsData[skinsData.length - 1].release).fromNow()}</h1>
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
{#if name.name != 'Original'}
<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="skin" style="background-image: url('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/{name.id.toString().slice(0, -3)}/{name.id}.jpg')" on:click={() => modal(name)}>
  <span class="skinInfo">{name.name} {_data.champ.name}<br> 

</div>
{/if}
{/each}

</div>

</div>
{/await}