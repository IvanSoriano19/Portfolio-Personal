import type { ReactNode } from "react"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"

type ProfileLinkProps = {
  href: string
  icon: ReactNode
  label: string
}

/** Botón a un perfil externo (GitHub, LinkedIn…) que se abre en otra pestaña. */
export function ProfileLink({ href, icon, label }: ProfileLinkProps) {
  return (
    <Button asChild size="lg" variant="secondary">
      <a href={href} target="_blank" rel="noopener noreferrer me">
        {icon}
        {label}
        <ArrowUpRight data-icon="inline-end" className="text-muted-foreground" />
        <span className="sr-only"> (se abre en una pestaña nueva)</span>
      </a>
    </Button>
  )
}
