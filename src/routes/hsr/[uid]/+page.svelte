<script>
// @ts-nocheck

    import { browser } from '$app/environment';
    import Loader from '../../Loader.svelte';
    import { page } from '$app/stores'
    import { fade } from 'svelte/transition';

    import './styles.css'

    /** @type {import('./$types').PageData} */  export let data;

    let user = {};
    let selected = "";
    let currentChar = "";

    async function loadData()
    {
      console.log('fetching....')
      const res = await fetch(`/api/hsr/${data.id}`)
      user = await res.json();

      console.log(user)

    selected = user.characters[0];
    }

    const cdn = "/images/hsr/"




    function handleHover(event, item)
    {
        selected = item;
        
    }

    async function getIcon(name)
    {
        const temp = await fetch(`/api/hsr/item/${name}`)
        let it = await temp.json();

        return it.icon;
    }


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

{#await selected}
{:then}
<div class='w-[1280px] h-[590px] rounded-3xl flex flex-row relative select-none' style="font-family: 'Inter'; background-image: url('/images/starrailbg.jpg')">
 <div class='p-5 z-10 details w-1/3 h-[590px]'>
    <div class='uppercase text-2xl flex flex-row gap-1 font-extrabold'>
        {#if !(selected.name == '{NICKNAME}')}
        <span>{selected.name}</span>
        {:else}
        <span>{user.player.name}</span>
        {/if}
        <div class='w-8 h-8'><img src={cdn + selected.element_icon}></div></div>
    <h1 class='text-xl'>Lv. {selected.level}</h1>

    <div class='absolute bottom-0 mb-5 flex-row flex gap-2'>
    {#each selected.rank_icons as eid}
        {#if eid.unlock == true}
            <div class='w-10 h-10 rounded-full bg-black mb-2 bg-style' style="background-image: url('{cdn + eid.icon}')"></div>
        {:else}
            <div class='relative w-10 h-10 rounded-full bg-black mb-2'>
            <div class='w-10 h-10 rounded-full bg-black opacity-80 bg-style z-10 absolute top-0 left-0 rotate-45 -scale-x-100' style="background-image: url('{cdn + "icon/sign/InventoryFosterIcon.webp"}')"></div>
            <div class='w-10 h-10 rounded-full bg-black bg-style absolute top-0 left-0' style="background-image: url('{cdn + eid.icon}')"></div>
            </div>
        {/if}
    {/each}
    </div>
 </div>

 <div class='p-5 z-10 details w-1/3 h-[590px] flex-col flex'>
    <div class='w-full h-40 flex flex-row'>
    <div class='w-36 h-36 rounded-3xl relative py-2'>
        <div class='w-32 h-32 bg-style absolute top-0 m-auto left-0 right-0 drop-shadow-lg' style="background-image: url('{cdn + selected.light_cone.icon}')"></div>
        <div class="flex flex-row w-32 h-8 justify-center absolute bottom-0 m-auto left-0 right-0 gap-0">
            {#each Array(selected.light_cone.rarity) as _, i}
            <div class='w-8 h-8 bg-style p-0 m-0 drop-shadow-xl' style="background-image: url('{cdn + "icon/deco/StarBig.png"}')"></div>
            {/each}
        </div>
    </div>
    <div class="py-2 flex flex-col space-between">
        <span class='font-extrabold text-lg'>{selected.light_cone.name}</span>
        <div class='flex flex-row justify-left'><div class='h-7 w-16 text-center font-semibold bg-white/20 rounded-md mr-2'>Lv. {selected.light_cone.level}</div> <div class='h-7 w-12 text-center font-semibold bg-white/20 rounded-md'>R{selected.light_cone.rank}</div></div>
    </div>
    </div>

    <div class="w-full flex flex-col">
        
    {#each selected.property as prop}

    <div class='stat-row flex-nowrap relative'>
        <div class='bg-style h-7 w-7' style="background-image: url('{cdn + prop.icon}')"></div>
        <div class='h-7 w-2/3 pl-2 text-left font-semibold text-lg uppercase rounded-md mr-2'>{prop.name}</div>
        <div class='h-7 w-1/3 text-right right-0 top-0 font-semibold uppercase rounded-md mr-2 flex flex-col absolute'>
            <span>{parseFloat(prop.base) + parseFloat(prop.addition || 0)}</span>
            <span class='text-xs'>{#if parseFloat(prop.addition || 0) > 1}{prop.base} <span class='text-green-400'>+{parseFloat(prop.addition || 0)}</span>{/if}</span>
        </div> 
    </div>
        
    {/each}
</div>

 </div>
 <div class='p-5 z-10 details w-1/3 h-[590px]'>
    <div class="w-full flex flex-col">

        {#each Object.entries(selected.relic) as [key, value], index (key)}
    
        <div class='stat-row flex-nowrap'>
            <div class='flex flex-row w-1/3 h-[4.6rem] relative justify-end pr-2'>
            <div class='h-20 w-20 text-left font-semibold text-sm uppercase rounded-md absolute left-0 -z-1 item-portrait' style="background-image: url('{cdn + selected.relic[key].icon}')"></div>
            <div class="h-20 w-20 flex flex-col items-end self-end z-10">
            <img src={cdn + selected.relic[key].main_property.icon} class='w-7 h-7 z-10' alt="xd">
            <div class='text-2xl z-10 font-bold'>{selected.relic[key].main_property.value}</div>
            <div class='text-sm z-10 font-semibold'>+{selected.relic[key].level}</div>
        </div>
             </div>
            <!-- <div class='h-10 w-1/3 text-right right-0 top-0 font-semibold uppercase rounded-md mr-2 flex flex-col absolute'>
                {#each relic.sub_property as prop}
                <div class='bg-style h-7 w-7' style="background-image: url('{cdn + prop.icon}')"></div>
                <span class='text-xs'>{prop.value}</span>
                {/each}
            </div>  -->

            <div class='flex flex-row flex-wrap w-2/3 h-[4.6rem] relative justify-start pl-2'>
                {#each selected.relic[key].sub_property as prop}
                <div class='h-9 w-1/2 prop-row align-middle text-right justify-around'>
                    <div class='bg-style h-9 w-9' style="background-image: url('{cdn + prop.icon}')"></div>
                    <span class="pt-2 font-semibold float-right">{prop.value}</span>

                </div>
                {/each}

            </div>

        </div>
            
        {/each}
    </div>
 </div>

<div class='w-1/3 h-[590px] char-portrait absolute left-0 -z-2' style="background-image: url('{cdn + selected.preview }')"></div>

</div>
{/await}

{:catch}
This user doesn't exist.


{/await}
