<script lang="ts">
    import { getFilteredCategory } from "$lib/api/getFilteredCategory.ts";
    import { getJokeSearch } from "$lib/api/getJokeSearch.ts";

    import type { Joke } from "$lib/types/Joke.ts";

    type Data = { categories: string[] };

    const { data } = $props<{ data: Data }>();
    const { categories } = data;
    
    let filteredCategory = $state<Joke>(null);
    let searchedTerms = $state<Joke[]>([]);
    let paginationLendth = $state<number>(0);

    const handleCategoryFilter = async (category: string) => {
        filteredCategory = await getFilteredCategory(category);
    }

    const handleSearch = async (e: any) => {
        const r = await getJokeSearch(e.target.value);
        searchedTerms = r.result;
        paginationLendth = r.total / 10;
    }
</script>

<h1>Chuck Norris Jokes</h1>
<div>
    {#each categories as c}
        <button onclick={() => handleCategoryFilter(c)}>{c}</button>
    {/each}
    {#if filteredCategory}
        <div>
            <p>{filteredCategory.value}</p>
            <img src={filteredCategory.icon_url} alt="joke icon"/>
        </div>
    {/if}
</div>
<div>
    <input onchange={(e) => handleSearch(e)} placeholder="Search joke..." />
</div>
{#if searchedTerms && searchedTerms.length > 0}
    <div>
        <h3>Search results:</h3>
        {#each searchedTerms as searchResultItem}
            <ul><li>{searchResultItem?.value}</li></ul>
        {/each}
    </div>
{/if}