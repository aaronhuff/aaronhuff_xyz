# Next.js Portfolio

This is a portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Development

To get started with local development, follow these steps:

```sh
# Step 1: Install the necessary dependencies.
npm i

# Step 2: Start the development server.
npm run dev
```

This will start the development server at `http://localhost:3000`.

## Tech Stack

This project is built with:

- [Next.js](https://nextjs.org/) - A React framework for building server-side rendered and static websites.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
- [shadcn/ui](https://ui.shadcn.com/) - A collection of re-usable components.
- [Jules](https://jules.ai/) - The primary development tool for this project.

## Deployment

This project has a two-stage deployment process:

- **Staging**: The `main` branch is automatically deployed to a staging environment on [Netlify](https://www.netlify.com/).
- **Production**: The `main` branch is also automatically deployed to the production environment on [GitHub Pages](https://pages.github.com/).

The domain `aaronhuff.xyz` is managed by [Cloudflare](https://www.cloudflare.com/) and points to the GitHub Pages deployment.
