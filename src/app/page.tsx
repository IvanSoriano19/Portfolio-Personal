import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Education } from "@/components/sections/education"
import { Experience } from "@/components/sections/experience"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { about, education, experience, projects, site, skills } from "@/data/portfolio"

/** Datos estructurados (schema.org) para que Google entienda quién eres. */
function getJsonLd() {
  const personId = `${site.url}/#person`

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: "es",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#profilepage`,
        url: site.url,
        name: `${site.name} — ${site.role}`,
        inLanguage: "es",
        isPartOf: { "@id": `${site.url}/#website` },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        url: site.url,
        email: `mailto:${site.email}`,
        jobTitle: site.role,
        description: about.paragraphs[0],
        image: about.photo ? new URL(about.photo, site.url).href : `${site.url}/opengraph-image`,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.location.split(",")[0],
          addressCountry: "ES",
        },
        worksFor: experience[0]
          ? { "@type": "Organization", name: experience[0].company }
          : undefined,
        alumniOf: [...new Set(education.map((item) => item.school))].map((school) => ({
          "@type": "EducationalOrganization",
          name: school,
        })),
        knowsAbout: skills.flatMap((group) => group.items),
        sameAs: Object.values(site.socials).filter(Boolean),
      },
      ...projects.map((project) => ({
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        url: project.demoUrl ?? project.repoUrl,
        codeRepository: project.repoUrl,
        keywords: project.tech.join(", "),
        author: { "@id": personId },
      })),
    ],
  }
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getJsonLd()).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </>
  )
}
