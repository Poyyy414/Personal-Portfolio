# John Paul Cambiado — Portfolio

A responsive software-engineering portfolio built with React, Vite, TypeScript, Framer Motion, Lucide React, and custom CSS.

## Run locally

```bash
npm install
npm run dev
```

To create and preview a production build:

```bash
npm run build
npm run preview
```

## Edit portfolio content

Personal information, social links, skills, projects, experience, and achievements live in `src/data/portfolio.ts`.

- Replace `public/JohnPaulCambiado_CV_Resume.pdf` whenever the résumé changes.
- Project architecture visuals are generated from each project's `architecture` value in `src/data/portfolio.ts`.
- Add project-specific repository and demo URLs to each project's `links` object when they are publicly available.
- Add real project screenshots under `public/projects/` when available; use WebP/AVIF and descriptive alternative text.
- Replace `public/profile-john-paul.webp` whenever the hero portrait changes. Keep it square, compressed, and approximately 1000×1000 pixels.
- Contact actions currently open the visitor's email client; there is no form submission backend to configure.

## Deploy to Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Keep the detected framework as **Vite**.
4. Use `npm run build` as the build command and `dist` as the output directory.
5. Deploy. No environment variables are currently required.

## Project structure

```text
src/
  components/       Reusable page sections and interactions
  data/portfolio.ts Single editable content source
  App.tsx            Page composition
  styles.css         Custom design system and responsive layout
public/              CV, profile image, favicon, and social preview asset
```

## Accessibility and performance

The site includes semantic landmarks, keyboard-operable controls, a skip link, visible focus styles, dialog focus management, reduced-motion support, responsive layouts, and compressed profile media.
