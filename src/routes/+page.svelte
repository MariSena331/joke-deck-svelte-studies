<script lang="ts">
    export let data: { categories: string[] };
    const { categories } = data;
</script>

<h1>Welcome to your library project</h1>
<ul>
    {#each categories as c}
        <button>{c}</button>
    {/each}
</ul>