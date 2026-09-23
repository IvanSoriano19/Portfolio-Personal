"use client"

import { Children, useEffect, useRef, useState, type ReactNode } from "react"

import { cn } from "@/lib/utils"

type CarouselProps = {
  children: ReactNode
  /** Nombre accesible de la lista (lo leen los lectores de pantalla). */
  label: string
  as?: "ul" | "ol"
  /** Clases de la lista: aquí va el diseño a partir de `md` (grid, lista…). */
  className?: string
  /** Clases de cada elemento. */
  itemClassName?: string
}

/**
 * En pantallas estrechas (< md) muestra los elementos en fila para deslizar
 * con el dedo, con la siguiente tarjeta asomando y puntos de página estilo iOS.
 * A partir de `md` el diseño lo decide `className` (normalmente un grid).
 * Usa scroll-snap nativo: todo el contenido está en el HTML, bueno para SEO.
 */
export function Carousel({
  children,
  label,
  as: List = "ul",
  className,
  itemClassName,
}: CarouselProps) {
  const listRef = useRef<HTMLOListElement & HTMLUListElement>(null)
  const [active, setActive] = useState(0)
  const items = Children.toArray(children)

  useEffect(() => {
    const list = listRef.current
    if (!list) return

    const onScroll = () => {
      const start = list.scrollLeft + parseFloat(getComputedStyle(list).paddingLeft)
      let closest = 0
      let distance = Infinity
      Array.from(list.children).forEach((child, i) => {
        const d = Math.abs((child as HTMLElement).offsetLeft - start)
        if (d < distance) {
          distance = d
          closest = i
        }
      })
      setActive(closest)
    }

    list.addEventListener("scroll", onScroll, { passive: true })
    return () => list.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div>
      <List
        ref={listRef}
        aria-label={label}
        className={cn(
          // `relative`: sin él, los hijos con position:absolute (p. ej. .sr-only) escapan del recorte y ensanchan la página
          "no-scrollbar relative -mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto overscroll-x-contain px-6 py-1",
          "md:mx-0 md:snap-none md:overflow-visible md:px-0 md:py-0",
          className
        )}
      >
        {items.map((child, i) => (
          <li
            key={i}
            className={cn("w-[85%] shrink-0 snap-start md:w-auto", itemClassName)}
          >
            {child}
          </li>
        ))}
      </List>

      {items.length > 1 && (
        <div className="mt-5 flex justify-center gap-1.5 md:hidden" aria-hidden>
          {items.map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-1.5 rounded-full bg-foreground/20 transition-all duration-300",
                i === active ? "w-5 bg-foreground/70" : "w-1.5"
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
