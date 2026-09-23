import { Mail, MapPin } from "lucide-react"

import { GitHubIcon, LinkedInIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { site } from "@/data/portfolio"

export function Contact() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal rounded-2xl bg-surface px-6 py-16 text-center sm:px-12 sm:py-24">
          <h2
            id="contacto-title"
            className="text-4xl font-semibold tracking-[-0.025em] text-balance sm:text-6xl"
          >
            ¿Hablamos?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-pretty text-muted-foreground sm:text-xl">
            Estoy abierto a nuevas oportunidades y colaboraciones. Escríbeme y te
            responderé lo antes posible.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="xl">
              <a href={`mailto:${site.email}`}>
                <Mail data-icon="inline-start" />
                {site.email}
              </a>
            </Button>
            <Button asChild size="xl" variant="secondary" className="bg-background dark:bg-secondary">
              <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer me">
                <LinkedInIcon data-icon="inline-start" />
                LinkedIn
              </a>
            </Button>
            {site.socials.github && (
              <Button asChild size="xl" variant="secondary" className="bg-background dark:bg-secondary">
                <a href={site.socials.github} target="_blank" rel="noopener noreferrer me">
                  <GitHubIcon data-icon="inline-start" />
                  GitHub
                </a>
              </Button>
            )}
          </div>

          <p className="mt-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" aria-hidden />
            {site.location}
          </p>
        </div>
      </div>
    </section>
  )
}
