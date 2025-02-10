import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const PROJECTS = [
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of the project and its key features",
    technologies: ["React", "Next.js", "TypeScript"]
  },
  {
    id: 2,
    title: "Project 2",
    description: "A brief description of the project and its key features",
    technologies: ["React", "Next.js", "TypeScript"]
  },
  {
    id: 3,
    title: "Project 3",
    description: "A brief description of the project and its key features",
    technologies: ["React", "Next.js", "TypeScript"]
  },
  {
    id: 4,
    title: "Project 4",
    description: "A brief description of the project and its key features",
    technologies: ["React", "Next.js", "TypeScript"]
  }
]

export function ProjectsSection() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <Card key={project.id} className="bg-zinc-900/20 border-zinc-800/50">
            <CardContent className="p-6">
              <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg" alt="Project preview" fill className="object-cover" />
              </div>
              <h3 className="font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-zinc-400 mb-4">{project.description}</p>
              <div className="flex gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <Button variant="outline" size="sm">
                View Project <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}