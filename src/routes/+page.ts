import { getCategories } from '$lib/api/getCategories.js';

export const load = async ({ fetch }) => ({ categories: await getCategories() });
