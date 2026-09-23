import { Section } from "@/components/section"
import { Timeline } from "@/components/timeline"
import { experience } from "@/data/portfolio"

export function Experience() {
  return (
    <Section
      id="experiencia"
      title="Experiencia"
      description="Dónde he trabajado y qué he aprendido por el camino."
    >
      <Timeline
        label="Experiencia"
        carousel
        items={experience.map((job) => ({
          period: job.period,
          title: job.role,
          subtitle: job.company,
          description: job.description,
        }))}
      />
    </Section>
  )
}
