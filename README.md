# garyli.dev

Personal site built in Next.js with automatic deployments and a responsive design.

## Description

This repo contains the source code for my personal site. Some notable features include:

- All commits are automatically deployed to Vercel.
- Mobile first responsive design with layout changes using breakpoints targeting md, lg and xl sizes.
- Images are automatically optimized with Next.js's Image components, which serve latest gen image formats (webp) based on compatibility.
- Next.js bundle analyzer support, which is enabled when the env var `ANALYZE` is true.
- Dependencies are monitored and kept up to date via Github's dependabot.

## Installation

To run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see my site.
