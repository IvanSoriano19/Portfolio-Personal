import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  title: string
  description?: string
  /** Botón junto al título (p. ej. enlace a GitHub o LinkedIn). */
  action?: ReactNode
  children: ReactNode
  className?: string
}

export function Section({
  id,
  title,
  description,
  action,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("py-20 sm:py-28", className)}
    >
      <div className="mx-auto max-w-5xl px-6">
        <header className="reveal mb-10 flex flex-col gap-6 sm:mb-14 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="max-w-2xl">
            <h2
              id={`${id}-title`}
              className="text-4xl font-semibold tracking-[-0.025em] text-balance sm:text-5xl"
            >
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-lg text-pretty text-muted-foreground sm:text-xl">
                {description}
              </p>
            )}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </header>
        {children}
      </div>
    </section>
  )
}
