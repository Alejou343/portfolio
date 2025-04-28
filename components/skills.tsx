"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3/SASS", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Vue.js", level: 80 },
      { name: "Angular", level: 75 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 85 },
      { name: "NestJS", level: 80 },
      { name: "Python", level: 75 },
      { name: "Django", level: 70 },
      { name: "PHP", level: 65 },
      { name: "Laravel", level: 60 },
      { name: "GraphQL", level: 78 },
      { name: "REST API", level: 90 },
    ],
  },
  {
    id: "database",
    label: "Bases de Datos",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 82 },
      { name: "Firebase", level: 88 },
      { name: "Redis", level: 70 },
      { name: "Supabase", level: 75 },
    ],
  },
  {
    id: "tools",
    label: "Herramientas",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Vercel", level: 85 },
      { name: "Netlify", level: 85 },
      { name: "CI/CD", level: 78 },
      { name: "Jest", level: 80 },
      { name: "Cypress", level: 75 },
    ],
  },
]

export default function Skills() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">Habilidades Técnicas</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Un conjunto de tecnologías y herramientas que domino para crear soluciones digitales completas.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeInUp}
        >
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <Tabs defaultValue="frontend" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                  {skillCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {skillCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id} className="mt-0">
                    <div className="grid gap-6">
                      {category.skills.map((skill, index) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-foreground/70">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-secondary h-3 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className="h-full bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
