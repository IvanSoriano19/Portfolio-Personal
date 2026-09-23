"use client"

import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

const STORAGE_KEY = "theme"

/**
 * Se ejecuta antes de pintar la página para aplicar el tema guardado
 * (o el del sistema) y evitar el parpadeo de claro a oscuro.
 */
export const themeScript = `(function(){try{var t=localStorage.getItem("${STORAGE_KEY}");var d=t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches;var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light"}catch(e){}})()`

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement
    const isDark = !root.classList.contains("dark")
    root.classList.toggle("dark", isDark)
    root.style.colorScheme = isDark ? "dark" : "light"
    try {
      localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light")
    } catch {}
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label="Cambiar entre modo claro y oscuro"
      className="size-11 text-muted-foreground hover:text-foreground"
    >
      <Sun className="dark:hidden" />
      <Moon className="hidden dark:block" />
    </Button>
  )
}
