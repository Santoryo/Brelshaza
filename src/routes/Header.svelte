<script>
    import Fa from 'svelte-fa'
    import { faBars } from '@fortawesome/free-solid-svg-icons'
    import MediaQuery from 'svelte-media-queries'
    import Links from './Header.links.svelte'
    import { fade } from 'svelte/transition';
    let showNavbar = false;


    function toggleNavbar() {
      showNavbar = !showNavbar;

    }
    
</script>

<button on:click={toggleNavbar} class="hamburger"><Fa icon={faBars} size="2x"/></button>
<MediaQuery query='(max-width: 1034px)' let:matches>
    {#if matches}
        <nav class:navbar={showNavbar}>
        {#if showNavbar}
        <div class="background" in:fade="{{duration: 200}}" out:fade="{{duration: 200}}">
            
            <div in:fade="{{duration: 200}}" out:fade="{{duration: 200}}"><Links /></div>
        </div>
        {/if}
        </nav>
    {:else}
        <nav class:navbar={showNavbar} on:mouseenter={toggleNavbar} on:mouseleave={toggleNavbar}>
            <div class="background">
            {#if showNavbar}
            <ul class='navbar-nav' in:fade="{{duration: 200}}" out:fade="{{duration: 200}}">
                <Links />
            </ul>
            {/if}
        </div>
        </nav>    
    {/if}
</MediaQuery>
