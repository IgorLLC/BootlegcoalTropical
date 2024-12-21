# Bootleg Coal Website

A static website built with Next.js, featuring book content and blog posts.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Adding Content

Add new content in the `content` directory:
- Create new `.md` files for blog posts
- Include frontmatter for metadata (title, date, etc.)
- Images go in the `public` directory

## Deployment

The site is configured for static export and can be deployed to GitHub Pages:

1. Build the site:
```bash
npm run export
```

2. The static files will be in the `out` directory
3. Push to GitHub and enable GitHub Pages in your repository settings
