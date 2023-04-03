<script>
    import { browser } from '$app/environment';
    import Loader from '../../Loader.svelte';
    import { page } from '$app/stores'
    /** @type {import('./$types').PageData} */  export let data;

    let user = ""

    async function loadData()
    {
      console.log('fetching....')
      const res = await fetch(`/api/loa/user/${data.id}`)
      user = await res.json();
    }


    import Meta from '../../Meta.svelte';
</script>

<Meta titleSuffix={data.id} description='Lost Ark Leaderboard'/>

{#await loadData()}
<Loader />
{:then}
{#if user.length > 0}
<h1>{user[0]}</h1>
<h2>User has {user.length} characters</h2>

{#each user as name}
<div>{name}</div>
{/each}

{:else}
This user doesn't have characters.
{/if}
{/await}