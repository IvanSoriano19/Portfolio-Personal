import { Carousel } from "@/components/carousel"

export type TimelineItem = {
  period: string
  title: string
  subtitle: string
  description?: string
}

type TimelineProps = {
  items: TimelineItem[]
  /** Nombre accesible de la lista. */
  label: string
  /** En pantallas estrechas, tarjetas deslizables en vez de lista. */
  carousel?: boolean
}

const rowClass =
  "border-b border-foreground/[0.06] px-6 py-6 last:border-b-0 md:px-8 md:py-7"

/**
 * Lista agrupada estilo iOS con el periodo a la izquierda (experiencia, formación…).
 * Con `carousel`, en móvil cada entrada es una tarjeta que se desliza en horizontal.
 */
export function Timeline({ items, label, carousel = false }: TimelineProps) {
  const key = (item: TimelineItem) => `${item.subtitle}-${item.title}-${item.period}`

  if (carousel) {
    return (
      <div className="reveal">
        <Carousel
          as="ol"
          label={label}
          className="md:block md:overflow-hidden md:rounded-2xl md:bg-surface"
          itemClassName="rounded-2xl bg-surface p-6 md:rounded-none md:border-b md:border-foreground/[0.06] md:bg-transparent md:px-8 md:py-7 md:last:border-b-0"
        >
          {items.map((item) => (
            <TimelineEntry key={key(item)} item={item} />
          ))}
        </Carousel>
      </div>
    )
  }

  return (
    <ol aria-label={label} className="reveal overflow-hidden rounded-2xl bg-surface">
      {items.map((item) => (
        <li key={key(item)} className={rowClass}>
          <TimelineEntry item={item} />
        </li>
      ))}
    </ol>
  )
}

function TimelineEntry({ item }: { item: TimelineItem }) {
  return (
    <div className="grid gap-1 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8">
      <p className="text-sm text-muted-foreground tabular-nums md:pt-1">
        {item.period}
      </p>
      <div>
        <h3 className="text-lg font-semibold tracking-tight">
          {item.title}
          <span className="font-normal text-muted-foreground"> · {item.subtitle}</span>
        </h3>
        {item.description && (
          <p className="mt-2 text-[15px] leading-relaxed text-pretty text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </div>
  )
}
