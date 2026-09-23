import { Check } from "lucide-react"

import { Carousel } from "@/components/carousel"
import { Section } from "@/components/section"
import { skills } from "@/data/portfolio"

export function Skills() {
  return (
    <Section id="habilidades" title="Habilidades">
      <div className="reveal">
        <Carousel
          label="Habilidades"
          className="md:grid md:grid-cols-2 md:gap-6"
        >
          {skills.map((group) => (
            <div key={group.title}>
              <h3 className="mb-2 px-5 text-[13px] font-medium tracking-wide text-muted-foreground uppercase">
                {group.title}
              </h3>
              <ul className="overflow-hidden rounded-2xl bg-surface">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-b border-foreground/[0.06] px-5 py-3.5 text-[15px] last:border-b-0"
                  >
                    <Check className="size-4 shrink-0 text-link" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Carousel>
      </div>
    </Section>
  )
}
