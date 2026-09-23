# Portfolio

Portfolio personal minimalista (estilo Apple / iOS) hecho con **Next.js 16**, **React 19**, **Tailwind CSS 4** y **shadcn/ui**.
Todas las páginas se generan como HTML estático, lo que ayuda al SEO y a la velocidad de carga.

## Desarrollo

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Dónde cambiar el contenido

Todo el texto está en [`src/data/portfolio.ts`](src/data/portfolio.ts): nombre, rol, stack, "Sobre mí", proyectos, experiencia, habilidades y redes sociales.

| Qué                  | Dónde                                                             |
| -------------------- | ----------------------------------------------------------------- |
| Tu CV                | Sustituye `public/cv.pdf`                                         |
| Foto de "Sobre mí"   | Déjala en `public/` y pon la ruta en `about.photo`                |
| Capturas de proyectos| Déjalas en `public/projects/` y pon la ruta en `image` de cada uno |
| Colores y tipografía | `src/app/globals.css`                                             |

## SEO

Incluido de serie:

- Metadatos completos (título, descripción, canonical, Open Graph, Twitter) en `src/app/layout.tsx`
- Datos estructurados JSON-LD (`ProfilePage` + `Person`) en `src/app/page.tsx`
- `robots.txt`, `sitemap.xml` y `manifest.webmanifest` generados automáticamente
- Imagen para compartir en redes (`src/app/opengraph-image.tsx`) e iconos con tus iniciales
- HTML semántico: un solo `h1`, secciones con `h2`, `lang="es"` y enlace para saltar al contenido

Antes de publicar:

1. Pon tu dominio real en `site.url` (o en la variable `NEXT_PUBLIC_SITE_URL`, ver `.env.example`).
2. Cambia la descripción y las `keywords` de `site` por las tuyas.
3. Tras publicar, da de alta el dominio en [Google Search Console](https://search.google.com/search-console) y envía `/sitemap.xml`.
4. Comprueba los datos estructurados con la [prueba de resultados enriquecidos](https://search.google.com/test/rich-results).

## Despliegue

La opción más sencilla es [Vercel](https://vercel.com): importa el repositorio y listo.
