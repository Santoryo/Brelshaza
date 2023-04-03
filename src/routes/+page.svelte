<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Fa from 'svelte-fa'
    import { faBars } from '@fortawesome/free-solid-svg-icons'
    import MediaQuery from 'svelte-media-queries'
	import Meta from './Meta.svelte';
</script>

<Meta titleSuffix='Home' description='Lost Ark & League of Legends tools'/>

<section>
<h1 class=' text-center text-4xl'>BRELSHAZA</h1>
<h1 class=' text-center text-3xl'>TOOLS FOR LOST ARK & <br> LEAGUE OF LEGENDS</h1>
<div class='brelshaza'></div>
</section>


<style>
.brelshaza {
	margin-top: 50px;
    width: 300px;
    height: 300px;
    background-image: url('/images/brelshaza.gif');
    background-size: contain;
}
</style>
