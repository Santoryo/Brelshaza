<script>
    import { browser } from '$app/environment';
    import '../rotations.css';
    import moment from 'moment'
    /** @type {import('./$types').PageData} */  export let data;
    import Meta from '../../Meta.svelte';
    import Icons from '../Icons.svelte';
    import { fade } from 'svelte/transition';

    let skin;
    let selected;
    let champId = 1;
    let modalActivated = false;

    async function modal(skinData)
    {
      const skinId = `${skinData.championId}0${skinData.number.toLocaleString('en-US', {minimumIntegerDigits: 2})}`

      const res = await fetch(`/api/lol/${skinId}`)
      const data = await res.json();

      modalActivated = true;
      skin = data.data;
      selected = skinData;

      champId = skinData.championId
    }

</script>

<Meta titleSuffix='Store Sale' description='League of Legends Weekly Store Sale Rotation'/>





<h1 class=' text-center text-4xl'>SALE ROTATION</h1>
<h1 class=' text-center text-3xl uppercase'>{moment(data.sale.skins[0].dates.startDate).format('MMM Do')} - {moment(data.sale.skins[0].dates.endDate).format('MMM Do')}</h1>
<h1 class=' text-center text-2xl uppercase'>ENDS {moment(data.sale.skins[0].dates.endDate).fromNow()}</h1>
<div class='skins'>

{#if modalActivated}
<div class='modal' style="background-image: url('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/{champId}/{skin.info.id}.jpg')" in:fade="{{duration: 200}}" out:fade="{{duration: 200}}">
<button class='modal-close' on:click={() => modalActivated=false}>X</button>
<div class='modal-column' id='m0'>
    <h1 class='text-2xl uppercase font-extrabold'><a href='/lol/champion/{encodeURIComponent(champId)}'>{skin.name} <Icons size=30 icon={skin.info.rarity} /></a></h1>
    <span><s><Icons size=15 /> {skin.info.cost}</s> &nbsp; &nbsp; &nbsp; &nbsp; <Icons size=15 /> {selected.discountedPrice} RP</span>
    <span>LAST TIME ON SALE: {moment(skin.sale[skin.sale.length - 1].skins[0].dates.startDate).format("MMMM Do YYYY")}</span>
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



{#each data.sale.skins as name}
<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="skin" style="background-image: url('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/{name.championId}/{name.championId}0{name.number.toLocaleString('en-US', {minimumIntegerDigits: 2})}.jpg')" on:click={() => modal(name)}>
  <span class="percentage">{name.percentage}% OFF</span>
  <span class="skinInfo">{name.skinName} <br> 
    <span class="discountRP"><s>{name.originalPrice} RP</s> {name.discountedPrice} RP</span></span>

</div>
{/each}
</div>

