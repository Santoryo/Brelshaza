<script>
    import { browser } from '$app/environment';
    import '../rotations.css';
    import moment from 'moment'
    import Meta from '../../Meta.svelte';
    import Icons from '../Icons.svelte';
    import { fade } from 'svelte/transition';
    import Loader from '../../Loader.svelte';

    let champions = [];

    async function init()
    {
        const res = await fetch('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/skins.json')
        const data = await res.json();

        for (const [key, value] of Object.entries(data)) {
        
            if(data[key].isBase)
            {
                let splash = data[key].tilePath.slice(1)
                splash = splash.replace('assets', 'global/default')
                champions.push({id: data[key].id, name: data[key].name, splash: splash});
            }
        }

        console.log(champions)
    }

</script>

<Meta titleSuffix='Store Sale' description='League of Legends Weekly Store Sale Rotation'/>



{#await init()}
<Loader />
{:then}
<h1 class=' text-center text-4xl'>LEAGUE OF LEGENDS</h1>
<h1 class='text-center text-3xl'>THERE ARE {champions.length} CHAMPIONS</h1>
<div class='skins overflow-y-auto'>




{#each champions as name}
<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<a href='/lol/champion/{name.name}'><div class="skin" style="background-image: url('https://raw.communitydragon.org/latest/plugins/rcp-be-{name.splash}')">
  <span class="skinInfo">{name.name} <br> 

</div></a>
{/each}
</div>

{/await}