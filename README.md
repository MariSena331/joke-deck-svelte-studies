# Desafio: Svelte: “JokeDeck” com Chuck Norris API
Objetivo: um app SPA com busca, filtros e favoritos persistidos.
https://www.notion.so/Svelte-242d07fbcd4c805fb8b2cc8c8eba8232

### API escolhida
Chuck Norris Jokes API (sem auth). Endpoints que você vai usar:

- GET `/jokes/categories`
- GET `/jokes/random?category={cat}`
- GET `/jokes/search?query={term}`

### Requisitos funcionais
- [X] Listar categorias em um menu lateral fixo.
- Buscar piadas por:
    - [X] Categoria (clique em uma categoria → carrega piada random da categoria).
    - [X] Texto livre (input → usa /search com paginação).
- Favoritos:
    - [ ] Botão “⭐ Favoritar” em cada piada.
    - [ ] Lista “Favoritos” com remoção.
    - [ ] Persistência em localStorage.
- [ ] Histórico de busca (últimos 10 termos; clicável para reexecutar).
- [ ] Estado de carregamento e tratamento de erro claros (skeletons/toasts).

### Requisitos técnicos
    - [ ] Svelte (ou SvelteKit em modo SPA).
    - Stores (writable/derived) para:
        - [ ] estado global (categoria selecionada, query, loading, errors);
        - [ ] coleção de favoritos (com serialização para localStorage);
    - [ ] Favoritos persistem ao recarregar.

### Componentização:
    - [ ] CategorySidebar.svelte, SearchBar.svelte, JokeCard.svelte, FavoritesDrawer.svelte, Paginator.svelte, Toast.svelte.

### Acessibilidade:
    - [ ] Navegação por teclado (foco visível, aria-* em botões/menus).
    - [ ] Leitores de tela: role="alert" para erros; labels nos inputs.

### Performance:
    - [ ] Debounce na busca (300 ms);
    - [ ] Cache in-memory de resultados por query e por category (Map).

### Testes:
    - [ ] 1 teste de store (adicionar/remover favorito);
    - [ ] 1 teste de componente (JokeCard renderiza e dispara evento de favorito);

### Estilo:
    - [ ] Tema claro/escuro com prefers-color-scheme + toggle manual (persistido);

### Qualidade:
    - [ ] ESLint + Prettier.
    - [ ] Tipagem JSDoc ou TypeScript opcional (se usar SvelteKit, prefira TS).

### Deploy: Vercel ou Netlify.
    - [ ] README: setup, decisões, trade-offs e próximos passos.
    - [ ] Critérios de aceitação
    - [ ] Paginação funciona em /search.

### Entregáveis
    - [ ] Repositório público com CI simples (lint + testes).
    - [ ] Link do deploy.

### Bônus
    - [ ] Offline-first para favoritos (Service Worker básico).
    - [ ] Atalhos de teclado (ex.: / foca busca, f favorita a piada focada).
    - [ ] Telemetria leve (contagem de buscas por sessão, sem libs externas).
