import type { CSSProperties } from "react"
import Image from "next/image"

import { TechIcon, techIcons } from "@/components/icons"
import { Section } from "@/components/section"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { about, site } from "@/data/portfolio"

export function About() {
  return (
    <Section id="sobre-mi" title="Sobre mí">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="reveal">
          <div className="space-y-5 text-lg leading-relaxed text-pretty text-muted-foreground">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-9 flex flex-wrap gap-3" aria-label="Tecnologías principales">
            {about.tech.map((id) => (
              <li key={id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span
                      tabIndex={0}
                      style={{ "--brand": `#${techIcons[id].hex}` } as CSSProperties}
                      className="flex size-12 items-center justify-center rounded-lg bg-surface text-foreground/80 transition-[color,background-color,box-shadow,translate] duration-300 ease-out outline-none hover:-translate-y-0.5 [--brand-fg:color-mix(in_oklab,var(--brand)_85%,black)] hover:bg-(--brand)/12 hover:text-(--brand-fg) hover:shadow-[0_8px_24px_-8px_var(--brand)] focus:bg-(--brand)/12 focus:text-(--brand-fg) focus-visible:ring-3 dark:[--brand-fg:color-mix(in_oklab,var(--brand)_70%,white)] dark:hover:bg-(--brand)/20 focus-visible:ring-ring/50 motion-reduce:hover:translate-y-0"
                    >
                      <TechIcon id={id} className="size-5" />
                      <span className="sr-only">{techIcons[id].title}</span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={6}>{techIcons[id].title}</TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface md:aspect-square">
          {about.photo ? (
            <Image
              src={about.photo}
              alt={`Foto de ${site.name}`}
              fill
              sizes="(min-width: 768px) 480px, 100vw"
              className="object-cover"
            />
          ) : (
            <PhotoPlaceholder />
          )}
        </div>
      </div>
    </Section>
  )
}

function PhotoPlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-end" aria-hidden>
      <div className="mb-4 aspect-square w-[34%] rounded-[28%] bg-foreground/[0.07]" />
      <div className="h-[28%] w-[62%] rounded-t-full bg-foreground/[0.07]" />
    </div>
  )
}
