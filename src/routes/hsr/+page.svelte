<script lang='ts'>

let value = '';
let submittedValue: any = null;

import { goto, invalidateAll } from '$app/navigation';


</script>


<div class='flex flex-col items-center'>
<h1 class=' text-center text-4xl uppercase'>Honkai Star Rail</h1>
<h1 class=' text-center text-3xl uppercase'>Player Cards</h1>
<h1 class='text-center text-lg uppercase' style="font-family: 'Inter'">For everyone. Without registering.</h1>

<form on:submit|preventDefault={() => goto(`/hsr/${value}`)}>
    <input type='text' class='bg-transparent rounded-2xl w-64 mt-12' style="font-family: 'Inter'" bind:value placeholder="e.g 101005845">
    <button on:click={() => goto(`/hsr/${value}`)}>Search</button>
</form>

</div>

