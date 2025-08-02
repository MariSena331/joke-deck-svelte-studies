export async function getFilteredCategory(category: string) {
    const res = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
    if (!res.ok) throw new Error('Falha ao buscar categorias');
    return (await res.json()) as { id: string; created_at: Date; icon_url: string; updated_at: Date; url: string; value: string};
}