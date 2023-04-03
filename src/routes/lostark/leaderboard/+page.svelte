<script>

	import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
	import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import './leaderboard.css'
    import Loader from '../../Loader.svelte';

    let offset = 0;
    let data;
    let text = '';
    let isLoading = false;

    let records = [];

    /**
	 * @param {number} offset
	 */
    async function getData(offset) {
        const res = await fetch(`/api/loa/${offset}`);
        const temp = await res.json();
        return temp;
    }

    const loadData = async () => {
        isLoading = true;
        const response = await getData(offset);
        records = [...records, ...response];
        isLoading = false
        text = records[0]
    };

    const loadMore = async () => {
    offset += 99;
    await loadData();
    };





    // @ts-ignore
    function handleHover(event, item) {
    text = item;
  }

  import Meta from '../../Meta.svelte';
</script>

<Meta titleSuffix='Leaderboard' description='Lost Ark Leaderboard'/>


<h1 class='text-center text-4xl'>LOST ARK LEADERBOARD</h1>
<h1 class='text-center text-3xl'>UPDATES EVERY 2 HOURS</h1>
<h1 class='text-center text-2xl uppercase'>There is 2000 players in database</h1>
{#await loadData()}
<Loader />
{:then response}
<div class='wrapper'>
    <div class='stats'>
        {#await text}
        <!---->
        {:then message}
        <div class='text-xl uppercase'>{message.name}</div>
        <div class='text-sm uppercase'>{message.username}</div>
        <div class='text-sm uppercase'>RANK {message.rank}</div>
        <div class='img' style="background-image: url('/images/loa/{message.class.toLowerCase()}.png')"></div>
        <div class='text-2xl uppercase'>{message.itemlvl} iLVL</div>
        {/await}
        
    </div>
    <div class='table'>
        <div class='table-header'>
        <div class='rank'>#</div>
        <div class='name'>NAME</div>
        <div class='ilvl'>ITEM LVL</div>
        <div class='roster'>ROSTER</div>
        </div>
        {#each records as player}
        {#if player}
        <a href='/lostark/{player.username}' target="_blank"><div class='player' on:mouseenter={(event) => handleHover(event, player)}>
            <div class='rank'>{player.rank}</div>
            <div class='name'>
                {player.name}
                <svg width="30" height='30'><image xlink:href='https://lostark.meta-game.gg/ClassIcons/{player.class}.svg' width="30" height="30" style='filter: invert(1);'></svg>
            </div>
            <div class='ilvl'>{player.itemlvl}</div>
            <div class='roster'>{player.rosterlevel}</div>
        </div></a>
        {/if}
        {/each}
        <button on:click={loadMore} disabled={isLoading} class='text-center'>{isLoading ? 'LOADING...' : 'LOAD MORE'}</button>
    </div>
    

</div>
{:catch error}
<p>{error.message}</p>
{/await}