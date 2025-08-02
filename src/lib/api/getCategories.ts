export async function getCategories() {
    const res = await fetch('https://api.chucknorris.io/jokes/categories');
    if (!res.ok) throw new Error('Falha ao buscar categorias');
    return (await res.json()) as string[];
}