<script lang='ts'>
    /** @type {import('./$types').PageData} */  export let data: any;
    import {marked} from 'marked'


</script>


{@html marked.parse("hiii  whatsup? :joy:", {breaks: true})}

{#each data.results.documents as document}

<h1>{document.post.title}</h1>
{@html marked.parse(document.content, {breaks: true})}


{/each}




