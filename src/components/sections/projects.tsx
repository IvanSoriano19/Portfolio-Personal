import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { Carousel } from "@/components/carousel"
import { GitHubIcon } from "@/components/icons"
import { Section } from "@/components/section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { projects, type Project } from "@/data/portfolio"

const tones: Record<Project["tone"], string> = {
  blue: "from-[#e8f1ff] to-[#cfe2ff] dark:from-[#0b2140] dark:to-[#0f2c55]",
  violet: "from-[#f1ebff] to-[#ddd1ff] dark:from-[#1e1638] dark:to-[#2a1f4d]",
  amber: "from-[#fff5e1] to-[#ffe3b5] dark:from-[#2e2210] dark:to-[#3d2d12]",
}

export function Projects() {
  return (
    <Section
      id="proyectos"
      title="Proyectos destacados"
      description="Una selección de trabajos en los que he diseñado, desarrollado y desplegado de principio a fin."
    >
      <div className="reveal">
        <Carousel
          label="Proyectos"
          className="md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <article key={project.slug} className="h-full">
              <ProjectCard project={project} />
            </article>
          ))}
        </Carousel>
      </div>
    </Section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      className="group h-full gap-0 rounded-2xl bg-surface p-2.5 py-2.5 ring-0 transition-transform duration-500 ease-out hover:-translate-y-1"
    >
      <div
        className={`relative aspect-[16/10] overflow-hidden rounded-md bg-gradient-to-br ${tones[project.tone]}`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`Captura del proyecto ${project.title}`}
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 85vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <ProjectPlaceholder />
        )}
      </div>

      <CardHeader className="gap-2 px-3 pt-5">
        <CardTitle className="text-xl font-semibold tracking-tight">
          <h3>{project.title}</h3>
        </CardTitle>
        <CardDescription className="text-[15px] leading-relaxed text-pretty">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="px-3 pt-4">
        <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologías usadas">
          {project.tech.map((tech) => (
            <li key={tech}>
              <Badge
                variant="secondary"
                className="h-6 bg-background px-2.5 text-muted-foreground dark:bg-secondary"
              >
                {tech}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="mt-auto gap-2 border-t-0 bg-transparent px-3 pt-6 pb-3">
        {project.demoUrl && (
          <Button asChild size="lg" className="flex-1">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              Demo
              <ArrowUpRight data-icon="inline-end" />
              <span className="sr-only">de {project.title} (se abre en una pestaña nueva)</span>
            </a>
          </Button>
        )}
        {project.repoUrl && (
          <Button asChild size="lg" variant="secondary" className="flex-1 bg-background dark:bg-secondary">
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <GitHubIcon data-icon="inline-start" />
              GitHub
              <span className="sr-only">: código de {project.title} (se abre en una pestaña nueva)</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

/** Mini ventana esquemática mientras el proyecto no tenga captura. */
function ProjectPlaceholder() {
  return (
    <div
      className="absolute inset-x-[8%] top-[10%] -bottom-2 flex flex-col rounded-t-md bg-card/85 p-[4%] shadow-sm ring-1 ring-black/5 transition-transform duration-700 ease-out group-hover:-translate-y-1 dark:ring-white/10"
      aria-hidden
    >
      <div className="flex gap-1">
        <span className="size-1.5 rounded-full bg-foreground/15" />
        <span className="size-1.5 rounded-full bg-foreground/15" />
        <span className="size-1.5 rounded-full bg-foreground/15" />
      </div>
      <div className="mt-[5%] h-2 w-2/5 rounded-full bg-foreground/15" />
      <div className="mt-2 h-2 w-3/5 rounded-full bg-foreground/[0.07]" />
      <div className="mt-[6%] grid flex-1 grid-cols-3 gap-2 pb-2">
        <div className="col-span-2 rounded-md bg-foreground/[0.06]" />
        <div className="grid gap-2">
          <div className="rounded-md bg-foreground/[0.06]" />
          <div className="rounded-md bg-foreground/[0.06]" />
        </div>
      </div>
    </div>
  )
}
