/**
 * Todo el contenido del portfolio vive aquí.
 * Datos sacados del perfil de LinkedIn de Ivan. Lo marcado como PENDIENTE sigue siendo de ejemplo.
 */

export type TechId =
  | "dotnet"
  | "react"
  | "typescript"
  | "javascript"
  | "postgresql"
  | "python"
  | "git"

export type Project = {
  slug: string
  title: string
  description: string
  tech: string[]
  /** Ruta dentro de /public, p. ej. "/projects/tienda.jpg". Si falta, se muestra un placeholder. */
  image?: string
  /** Tono del placeholder mientras no haya imagen. */
  tone: "blue" | "violet" | "amber"
  demoUrl?: string
  repoUrl?: string
}

export type Experience = {
  role: string
  company: string
  period: string
  description: string
}

export type Education = {
  degree: string
  school: string
  period: string
}

export type SkillGroup = {
  title: string
  items: string[]
}

export const site = {
  /** URL final donde se publicará la web (necesaria para SEO: canonical, sitemap, Open Graph). */
  // PENDIENTE: dominio real
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ivansoriano.dev",
  name: "Ivan Soriano Bacete",
  firstName: "Ivan",
  role: "Desarrollador FullStack",
  stack: ["C#", ".NET", "React", "TypeScript"],
  location: "Pontevedra, España",
  email: "ivansoriano1901@gmail.com",
  cvUrl: "/cv.pdf",
  /** Muestra el aviso "Disponible para nuevos proyectos" en la portada. */
  available: false,
  description:
    "Portfolio de Ivan Soriano Bacete, desarrollador FullStack en Pontevedra especializado en C#, .NET, React y TypeScript. Experiencia, formación y contacto.",
  keywords: [
    "Ivan Soriano Bacete",
    "desarrollador fullstack",
    "desarrollador .NET",
    "desarrollador C#",
    "desarrollador React",
    "programador Pontevedra",
    "desarrollador web Galicia",
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/ivan-soriano-bacete-068365225/",
    // PENDIENTE: perfil de GitHub
    github: undefined as string | undefined,
  },
}

export const about = {
  paragraphs: [
    "Desarrollador FullStack con experiencia en proyectos web y multiplataforma, aplicando tecnologías actuales como C# con .NET Core, TypeScript y JavaScript utilizando React.",
    "Mi experiencia como deportista de alto nivel en Taekwondo me ha enseñado el valor de la perseverancia y el compromiso, cualidades que aplico en mi día a día profesional.",
    "Soy una persona muy ambiciosa, con una rápida capacidad de aprendizaje y siempre estoy buscando crecer y enfrentar nuevos retos.",
  ],
  photo: undefined as string | undefined,
  tech: ["dotnet", "react", "typescript", "javascript", "postgresql", "python", "git"] satisfies TechId[],
}

// PENDIENTE: LinkedIn no tiene proyectos. Estos tres son de ejemplo.
export const projects: Project[] = [
  {
    slug: "tienda-online",
    title: "Tienda online",
    description:
      "E-commerce con carrito, pagos con Stripe y panel de administración para gestionar inventario en tiempo real.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    tone: "blue",
    demoUrl: "https://example.com",
  },
  {
    slug: "gestor-tareas",
    title: "Gestor de tareas",
    description:
      "Aplicación colaborativa tipo Kanban con sincronización en tiempo real, etiquetas y filtros avanzados.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    tone: "violet",
    demoUrl: "https://example.com",
  },
  {
    slug: "dashboard-finanzas",
    title: "Dashboard de finanzas",
    description:
      "Panel para visualizar gastos e ingresos personales con gráficas interactivas y exportación a CSV.",
    tech: ["React", "Express", "Prisma", "Chart.js"],
    tone: "amber",
    demoUrl: "https://example.com",
  },
]

export const experience: Experience[] = [
  {
    role: "Desarrollador de software",
    company: "Matrix Development System",
    period: "Oct 2025 — Actualidad",
    description:
      "Desarrollo de software con C#, .NET Core, .NET Framework y Visual Basic .NET sobre SQL Server, incluidas integraciones con distintos software de contabilidad. Trabajo en remoto con metodologías ágiles.",
  },
  {
    role: "Desarrollador .NET",
    company: "Pavabits",
    period: "Feb 2024 — Sept 2025",
    description:
      "Desarrollo con C# y ASP.NET en el backend y React con TypeScript en el frontend. APIs documentadas con Swagger, integraciones con Apache Camel e integración continua con Jenkins, en un equipo Scrum.",
  },
  {
    role: "Desarrollador back-end (prácticas)",
    company: "TRAK",
    period: "Mar 2023 — Jun 2023",
    description:
      "Desarrollo de una API REST con Python y Django REST framework para que una plataforma de terceros pudiera integrarse con ella, con pruebas unitarias y trabajo de frontend con Material-UI.",
  },
  {
    role: "Desarrollador back-end (prácticas)",
    company: "Gedesco Services Spain",
    period: "Mar 2022 — Jun 2022",
    description: "Creación de nuevas funcionalidades y testing de la aplicación.",
  },
]

export const education: Education[] = [
  {
    degree: "Grado en Ingeniería Informática",
    school: "Universitat Oberta de Catalunya",
    period: "2025 — Actualidad",
  },
  {
    degree: "CFGS Desarrollo de Aplicaciones Web",
    school: "IES Abastos",
    period: "2022 — 2023",
  },
  {
    degree: "CFGS Desarrollo de Aplicaciones Multiplataforma",
    school: "IES Abastos",
    period: "2021 — 2023",
  },
  {
    degree: "Bachillerato Científico-Tecnológico",
    school: "IES Andreu Alfaro",
    period: "2017 — 2020",
  },
]

export const skills: SkillGroup[] = [
  {
    title: "Backend",
    items: ["C#", ".NET Core y .NET Framework", "ASP.NET", "Visual Basic .NET", "Python y Django REST framework", "Java"],
  },
  {
    title: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Material-UI", "HTML5 y CSS"],
  },
  {
    title: "Bases de datos",
    items: ["SQL", "Microsoft SQL Server", "PostgreSQL", "MySQL", "Supabase"],
  },
  {
    title: "Herramientas y metodologías",
    items: ["Git y GitHub", "Postman y Swagger", "Jira", "Scrum y pruebas unitarias"],
  },
]

export const navLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
]
