import { getCategories } from '$lib/api/getCategories.js';

export const load = async () => ({ categories: await getCategories() });
