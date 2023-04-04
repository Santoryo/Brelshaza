<script lang='ts'>
    export let icon: string = "RP";
    export let size: number = 20;
</script>


{#if icon != 'NoRarity'}
 <img class='icon' src="/images/lol/{icon}.webp" width="{size}px" height="{size}px" alt='icon'>
{/if}

<style>
.icon {
    display: inline;
    padding-bottom: 5px;
}
</style>
