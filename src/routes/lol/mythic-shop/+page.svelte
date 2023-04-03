<script>
    import { browser } from '$app/environment';
    import '../rotations.css';
    import moment from 'moment'
    /** @type {import('./$types').PageData} */  export let data;

    
  </script>



<h1 class='text-center text-4xl'>MYTHIC SHOP ROTATION</h1>
<h1 class='text-center text-3xl uppercase'>PATCH {data.patch}</h1>
<h1 class='text-center text-2xl uppercase'>ENDS {moment(data.date).fromNow()}</h1>
<div class='skins'>
{#each data.sale.skins as name}
<!-- svelte-ignore a11y-missing-attribute -->
<div class="skin" style="background-image: url('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/{name.championId}/{name.championId}0{name.skinId.toLocaleString('en-US', {minimumIntegerDigits: 2})}.jpg')">
<span class="skinInfo">{name.skinName}<br> 
    <span class="discountME">{name.price} ME</span></span>
</div>
{/each}
</div>
