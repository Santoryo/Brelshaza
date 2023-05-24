<script>
    // import { browser } from '$app/environment';
    // import '../../rotations.css';
    // import moment from 'moment'
    // /** @type {import('./$types').PageData} */  export let data;
    // import Meta from '../../../Meta.svelte';
    // import Icons from '../../Icons.svelte';
    // import { fade } from 'svelte/transition';
    // import Loader from '../../../Loader.svelte';
    // import buffer from 'buffer'

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
        

    function ObjectIdToTimestamp(_objectid)
    {
      const objectIdBin = buffer.Buffer.from(_objectid, 'hex');
      const timestamp = new Date(parseInt(objectIdBin.toString('hex').substring(0, 8), 16) * 1000);
      console.log(timestamp)
      return timestamp;
    }

    


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
<div class='modal' style="background-image: url('')">
<button class='modal-close' on:click={() => modalActivated=false}>X</button>
  
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