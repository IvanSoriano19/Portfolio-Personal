import { ArrowDown, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { site } from "@/data/portfolio"

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-title"
      className="pt-32 pb-16 sm:pt-44 sm:pb-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-3xl animate-in duration-700 fade-in slide-in-from-bottom-4">
          {site.available && (
            <p className="mb-6 inline-flex items-center gap-2 rounded-lg bg-surface px-3 py-1 text-[13px] text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#28c840] opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-[#28c840]" />
              </span>
              Disponible para nuevos proyectos
            </p>
          )}

          <h1
            id="inicio-title"
            className="text-5xl leading-[1.05] font-semibold tracking-[-0.035em] text-balance sm:text-6xl lg:text-7xl"
          >
            Hola, soy {site.name}
          </h1>

          <p className="mt-6 text-2xl font-medium tracking-tight sm:text-[28px]">
            {site.role}
          </p>
          <p className="mt-2 text-lg text-muted-foreground sm:text-xl">
            {site.stack.join(" · ")}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="xl">
              <a href="#proyectos">
                Ver proyectos
                <ArrowDown data-icon="inline-end" />
              </a>
            </Button>
            <Button asChild size="xl" variant="secondary">
              <a href={site.cvUrl} download={site.cvFileName}>
                <Download data-icon="inline-start" />
                Descargar CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
