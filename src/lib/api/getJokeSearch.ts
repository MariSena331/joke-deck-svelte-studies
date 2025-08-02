import type { Joke } from "$lib/types/Joke.ts";

export async function getJokeSearch(query: string) {
    const result = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
    if (!result.ok) throw new Error('Falha ao buscar categorias');
    return (await result.json()) as { total: number; result: Joke[]};
}