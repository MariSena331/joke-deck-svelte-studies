<script lang="ts">
    import { getFilteredCategory } from "$lib/api/getFilteredCategory.ts";

    type Data = { categories: string[] };
    type Joke = { id: string; created_at: Date; icon_url: string; updated_at: Date; url: string; value: string } | null;

    const { data } = $props<{ data: Data }>();
    const { categories } = data;

    let filteredCategory = $state<Joke>(null);

    const handleCategoryFilter = async (category: string) => {
        filteredCategory = await getFilteredCategory(category);
    }
</script>

<h1>Welcome to your library project</h1>
<ul>
    {#each categories as c}
        <button onclick={() => handleCategoryFilter(c)}>{c}</button>
    {/each}
    {#if filteredCategory}
        <div>
            <p>{filteredCategory.value}</p>
            <img src={filteredCategory.icon_url} alt="n sei"/>
        </div>
    {/if}
</ul>