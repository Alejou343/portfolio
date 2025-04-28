"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Una plataforma de comercio electrónico completa con carrito de compras, pagos y panel de administración.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Panel de control interactivo para visualizar y analizar datos empresariales en tiempo real.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Vue.js", "Express", "D3.js", "PostgreSQL"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "Social Media App",
    description: "Aplicación de redes sociales con funciones de chat, publicaciones y perfiles de usuario.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "Firebase", "Redux", "Socket.io"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 4,
    title: "Task Management",
    description: "Sistema de gestión de tareas con funciones de colaboración, recordatorios y seguimiento de progreso.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Angular", "TypeScript", "NestJS", "MySQL"],
    demoUrl: "#",
    repoUrl: "#",
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/20">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">Proyectos Destacados</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes y significativos que demuestran mis habilidades y experiencia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Card className="overflow-hidden card-hover border-primary/20 h-full flex flex-col">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{
                      transform: hoveredId === project.id ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-4">
                  <Button asChild variant="default" size="sm">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github size={16} />
                      Código
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
