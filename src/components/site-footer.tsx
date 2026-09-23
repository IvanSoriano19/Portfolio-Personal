import { GitHubIcon, LinkedInIcon } from "@/components/icons"
import { site } from "@/data/portfolio"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
        </p>
        <ul className="flex items-center gap-1">
          {site.socials.github && (
            <li>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer me"
                aria-label="GitHub"
                className="flex size-11 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                <GitHubIcon className="size-4" />
              </a>
            </li>
          )}
          <li>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer me"
              aria-label="LinkedIn"
              className="flex size-11 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
            >
              <LinkedInIcon className="size-4" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
