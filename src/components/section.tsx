import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function Section({
  id,
  title,
  description,
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
        <header className="reveal mb-10 max-w-2xl sm:mb-14">
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
        </header>
        {children}
      </div>
    </section>
  )
}
