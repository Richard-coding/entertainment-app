# Entertainment Web App

Aplicação responsiva para explorar filmes e séries, com busca e lista de favoritos. Feita como projeto de estudo
de React e TypeScript a partir do desafio _Entertainment Web App_ do Frontend Mentor.

**Demonstração:** [entertainment-app-theta-lilac.vercel.app](https://entertainment-app-theta-lilac.vercel.app)

## Objetivo

Construir uma aplicação completa a partir de um design pronto, organizando navegação, busca e estado
compartilhado entre páginas com React Router.

## Funcionalidades

- Página inicial com destaques em rolagem horizontal e recomendados.
- Páginas separadas para filmes (`/movies`), séries (`/tv-series`) e favoritos (`/bookmarked`).
- Busca por título, com a contagem de resultados encontrados.
- Adicionar e remover favoritos, que continuam salvos ao recarregar a página (`localStorage`).
- Indicação da página ativa na navegação.
- Layout responsivo para celular, tablet e desktop.

Os títulos vêm de um arquivo JSON do próprio projeto (não há API externa).

## Tecnologias

- React e TypeScript
- Vite
- React Router
- Tailwind CSS

## Como executar localmente

```bash
git clone https://github.com/Richard-coding/entertainment-app.git
cd entertainment-app
npm install
npm run dev
```

Acesse `http://localhost:5173`. Para gerar a versão de produção: `npm run build`.

## Status

Concluído como projeto de estudo.

## Créditos e autoria

- Design e imagens: desafio [Entertainment Web App](https://www.frontendmentor.io) do Frontend Mentor.
- Desenvolvimento: Richard Soares Mesquita — [GitHub](https://github.com/Richard-coding).
