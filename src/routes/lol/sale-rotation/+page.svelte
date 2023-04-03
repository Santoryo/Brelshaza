<script>
    import { browser } from '$app/environment';
    import '../rotations.css';
    import moment from 'moment'
    /** @type {import('./$types').PageData} */  export let data;
    import Meta from '../../Meta.svelte';
</script>

<Meta titleSuffix='Store Sale' description='League of Legends Weekly Store Sale Rotation'/>


<h1 class=' text-center text-4xl'>SALE ROTATION</h1>
<h1 class=' text-center text-3xl uppercase'>{moment(data.sale.skins[0].dates.startDate).format('MMM Do')} - {moment(data.sale.skins[0].dates.endDate).format('MMM Do')}</h1>
<h1 class=' text-center text-2xl uppercase'>ENDS {moment(data.sale.skins[0].dates.endDate).fromNow()}</h1>
<div class='skins'>
{#each data.sale.skins as name}
<!-- svelte-ignore a11y-missing-attribute -->
<div class="skin" style="background-image: url('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/{name.championId}/{name.championId}0{name.number.toLocaleString('en-US', {minimumIntegerDigits: 2})}.jpg')">
  <span class="percentage">{name.percentage}% OFF</span>
  <span class="skinInfo">{name.skinName} <br> 
    <span class="discountRP"><s>{name.originalPrice} RP</s> {name.discountedPrice} RP</span></span>

</div>
{/each}
</div>

