# Sistema de diseño

Referencia rápida de las decisiones de diseño del portfolio, para mantener todo consistente según se añadan secciones o páginas nuevas. Inspirado en apple.com / iOS: tipografía grande y segura, superficies grises planas (sin bordes duros), mucho aire, movimiento sutil.

## Color

Los tokens viven en [`src/app/globals.css`](src/app/globals.css) como variables CSS (`:root` y `.dark`), mapeadas a utilidades de Tailwind vía `@theme inline`. No hardcodees hex en componentes nuevos: usa las clases (`bg-background`, `text-muted-foreground`, `bg-surface`…).

| Token | Uso | Light | Dark |
|---|---|---|---|
| `background` / `foreground` | Fondo de página y texto principal | `#ffffff` / `#1d1d1f` | `#000000` / `#f5f5f7` |
| `surface` | Bloques grises (tarjetas planas, filas de lista) — el `#f5f5f7` de Apple | `#f5f5f7` | `#161617` |
| `card` | Tarjetas con relieve propio (usa `ring-1 ring-foreground/10`) | `#ffffff` | `#1c1c1e` |
| `muted-foreground` | Texto secundario | `#6e6e73` | `#a1a1a6` |
| `link` / `ring` | Azul de acento (enlaces, foco, check icons) | `#0066cc` / `#0071e3` | `#2997ff` |
| `primary` | Botón principal (negro sobre blanco, y al revés en oscuro) | `#1d1d1f` | `#f5f5f7` |

Todos los pares texto/fondo usados en el sitio cumplen WCAG AA (≥ 4.5:1 en texto normal). Si añades un color nuevo, comprueba su contraste antes de usarlo en texto.

**Colores de marca de tecnologías:** los iconos de "Sobre mí" se iluminan al pasar el ratón (o al tocarlos en móvil) con el color oficial de cada tecnología. Ese color viene de `simple-icons` (`icon.hex`) a través de la variable `--brand`. El icono usa `--brand-fg`, que es el mismo tono algo más oscuro en modo claro y más claro en oscuro. Así se lee sobre el fondo: el morado de .NET o el amarillo de JavaScript no contrastan tal cual. El fondo lleva un tinte del color y un brillo suave.

## Tipografía

- Fuente: **Inter** (`next/font/google`, variable `--font-inter`).
- Títulos de sección (`h2`): `text-4xl sm:text-5xl font-semibold tracking-[-0.025em]`.
- H1 (solo en el hero, que va sin nada a la derecha): `text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.035em]` dentro de un bloque `max-w-3xl`.
- Cuerpo: `text-lg` / `text-[15px]` con `text-muted-foreground` para texto secundario.
- Usa siempre `text-balance` en titulares y `text-pretty` en párrafos largos (evita huérfanas).

## Espaciado y forma

- Redondeo **contenido**, al estilo Apple: solo suaviza las esquinas, nada de píldoras. Radio base `--radius: 0.625rem` (10px) y escala derivada:

  | Clase | Radio | Dónde |
  |---|---|---|
  | `rounded-md` | 8px | Etiquetas (`Badge`) e imágenes dentro de tarjetas |
  | `rounded-lg` | 10px | Botones, iconos de tecnologías, enlaces de icono |
  | `rounded-2xl` | 18px | Tarjetas y bloques grandes (proyectos, experiencia, habilidades, contacto, foto) |

- **Radios concéntricos:** un elemento dentro de otro lleva radio = radio exterior − padding. Por ejemplo, la tarjeta de proyecto (18px, padding 10px) contiene la imagen con 8px.
- No uses `rounded-full` salvo en elementos realmente circulares (puntos, indicadores de página).
- Secciones: `py-20 sm:py-28` verticales, contenido en `max-w-5xl px-6`. Usa el componente [`Section`](src/components/section.tsx) para cualquier sección nueva con título — mantiene el heading y el espaciado consistentes.

## Interacción

- **Zona táctil mínima: 44×44px** (guía de Apple HIG) en cualquier control que sea solo icono (botones de icono, enlaces sociales). Los botones con texto ya cumplen con `size="lg"` (36px) o `size="xl"` (44px) — usa `xl` para CTAs principales.
- Todo control interactivo lleva `focus-visible:ring-3 focus-visible:ring-ring/50` (ya viene incluido en `Button`, `Badge`, etc. de shadcn/ui — no lo quites).
- Todo botón/enlace de solo icono necesita `aria-label`; todo icono decorativo lleva `aria-hidden`.
- **Carrusel en pantallas estrechas** (< 768px): proyectos, experiencia y habilidades se deslizan en horizontal con [`Carousel`](src/components/carousel.tsx).
  - Usa scroll-snap nativo: se desliza como en iOS y todo el contenido sigue en el HTML (bueno para SEO).
  - La siguiente tarjeta asoma por el borde y debajo hay puntos de página.
  - A partir de `md`, cada sección elige su diseño (grid o lista) con `className`.
  - No pongas `.reveal` en los elementos de dentro del carrusel, sino en el contenedor: su animación depende del scroll vertical y dentro de un scroll horizontal podrían quedarse invisibles.
  - La lista es `relative` a propósito. Sin eso, los textos `.sr-only` (posición absoluta) se escapan del recorte y crean scroll horizontal en toda la página.
- Animación de aparición al hacer scroll (`.reveal`, en `globals.css`) usa `animation-timeline: view()` — es progresiva (con `@supports`) y se desactiva automáticamente con `prefers-reduced-motion: reduce`. No añadas animaciones que ignoren esa preferencia.

## Componentes

- Los componentes de shadcn/ui viven en [`src/components/ui/`](src/components/ui/) — no los edites a mano salvo ajustes de tema ya aplicados (radio `rounded-lg` en `Button` y `rounded-md` en `Badge`, tamaño `xl` añadido). Para nuevos, usa `npx shadcn@latest add <componente>` desde `portfolio-web/`.
- Las secciones de contenido viven en [`src/components/sections/`](src/components/sections/), una por bloque de la home. Cada una consume [`src/data/portfolio.ts`](src/data/portfolio.ts) — no metas texto suelto en el JSX.
- Iconos de marca (GitHub, LinkedIn, stacks tecnológicos) están en [`src/components/icons.tsx`](src/components/icons.tsx), usando `simple-icons` para los logos de tecnologías y trazos a mano al estilo Lucide para redes sociales (Lucide no incluye logos de marca).

## Componentes archivados

Piezas que se quitaron de la web pero se guardan por si se recuperan. No se importan en ningún sitio.

### Ventana de código — [`src/components/archive/code-window.tsx`](src/components/archive/code-window.tsx)

Ventana estilo macOS, con los tres puntos de colores, que mostraba un objeto TypeScript con tus datos (`rol`, `ubicación`, `stack`, `disponible`) coloreado con el tema de Xcode. Iba a la derecha del título en la portada. Se quitó el 2026-09-23 por resultar demasiado cargada.

Para recuperarla, en [`hero.tsx`](src/components/sections/hero.tsx):

1. Importa `import { CodeWindow } from "@/components/archive/code-window"`.
2. Pon el contenedor a dos columnas (`grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr]`) y quita `max-w-3xl` del bloque de texto.
3. Añade `<CodeWindow />` después del bloque de texto.
4. Baja el H1 a `lg:text-[4rem]` para que el nombre quepa en dos líneas junto a la ventana.

## Cuándo romper estas reglas

Si una sección nueva necesita un patrón distinto (por ejemplo, una página de detalle de proyecto), está bien introducir una variación — pero reutiliza los tokens de color/radio/espaciado de arriba para que se siga sintiendo parte del mismo sitio.
