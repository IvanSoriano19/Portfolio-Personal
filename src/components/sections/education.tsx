import { Section } from "@/components/section"
import { Timeline } from "@/components/timeline"
import { education } from "@/data/portfolio"

export function Education() {
  return (
    <Section id="formacion" title="Formación" className="pt-0 sm:pt-0">
      <Timeline
        label="Formación"
        items={education.map((item) => ({
          period: item.period,
          title: item.degree,
          subtitle: item.school,
        }))}
      />
    </Section>
  )
}
