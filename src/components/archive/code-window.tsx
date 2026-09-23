/**
 * ARCHIVADO — no se usa en la web ahora mismo.
 *
 * Ventana estilo macOS con un "perfil" en TypeScript (colores del tema de Xcode)
 * que iba a la derecha del título en la portada. Se quitó por resultar demasiado cargada.
 * Cómo recuperarla: ver "Componentes archivados" en DESIGN.md.
 */
import { site } from "@/data/portfolio"

export function CodeWindow() {
  const variable = site.firstName.toLowerCase()
  const str = "text-[#c41a16] dark:text-[#fc6a5d]"
  const kw = "text-[#9b2393] dark:text-[#fc5fa3]"
  const prop = "text-[#326d74] dark:text-[#67b7a4]"

  return (
    <div
      className="animate-in rounded-2xl bg-surface p-3 delay-150 duration-700 fill-mode-both fade-in slide-in-from-bottom-6 sm:p-4"
      aria-hidden
    >
      <div className="overflow-hidden rounded-lg bg-card shadow-[0_1px_2px_rgb(0_0_0/0.04),0_12px_40px_-12px_rgb(0_0_0/0.12)] ring-1 ring-border">
        <div className="flex items-center gap-2 border-b px-4 py-3">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-muted-foreground">
            {variable}.ts
          </span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:p-6 sm:text-sm">
          <code>
            <span className={kw}>const</span> {variable} = {"{"}
            {"\n"}
            {"  "}
            <span className={prop}>rol</span>: <span className={str}>&quot;{site.role}&quot;</span>,
            {"\n"}
            {"  "}
            <span className={prop}>ubicación</span>: <span className={str}>&quot;{site.location}&quot;</span>,
            {"\n"}
            {"  "}
            <span className={prop}>stack</span>: [
            {site.stack.map((tech, i) => (
              <span key={tech}>
                <span className={str}>&quot;{tech}&quot;</span>
                {i < site.stack.length - 1 && ", "}
              </span>
            ))}
            ],
            {site.available && (
              <>
                {"\n"}
                {"  "}
                <span className={prop}>disponible</span>: <span className={kw}>true</span>,
              </>
            )}
            {"\n"}
            {"}"}
          </code>
        </pre>
      </div>
    </div>
  )
}
