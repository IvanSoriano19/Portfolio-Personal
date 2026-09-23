"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"

import { ThemeToggle } from "@/components/theme"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks, site } from "@/data/portfolio"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-colors duration-300",
        scrolled &&
          "border-border bg-background/70 backdrop-blur-xl backdrop-saturate-150"
      )}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a
          href="#inicio"
          className="text-[15px] font-semibold tracking-tight"
        >
          {site.name}
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="hidden px-3.5 sm:inline-flex"
          >
            <a href={site.cvUrl} download={site.cvFileName}>
              CV
            </a>
          </Button>
          <ThemeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="size-11 md:hidden"
                aria-label="Abrir menú"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="rounded-b-2xl border-b-0 px-6 pt-16 pb-8"
            >
              <SheetTitle className="sr-only">Menú</SheetTitle>
              <SheetDescription className="sr-only">
                Navegación del sitio
              </SheetDescription>
              <nav aria-label="Móvil">
                <ul className="flex flex-col">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <SheetClose asChild>
                        <a
                          href={link.href}
                          className="block border-b py-3.5 text-2xl font-semibold tracking-tight"
                        >
                          {link.label}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button asChild size="xl" className="mt-4">
                <a href={site.cvUrl} download={site.cvFileName}>
                  Descargar CV
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
