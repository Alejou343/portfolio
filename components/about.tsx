"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Heart, Lightbulb } from "lucide-react"

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">Sobre Mí</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Desarrollador apasionado por crear soluciones digitales innovadoras y experiencias de usuario excepcionales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
          >
            <Card className="h-full card-hover border-primary/20">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Educación</h3>
                  </div>
                  <p className="text-foreground/80">
                    Ingeniero en Sistemas Computacionales con especialización en desarrollo web y aplicaciones móviles.
                    Constantemente aprendiendo nuevas tecnologías y metodologías para mantenerme a la vanguardia.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeInUp}
          >
            <Card className="h-full card-hover border-primary/20">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Experiencia</h3>
                  </div>
                  <p className="text-foreground/80">
                    Más de 5 años de experiencia trabajando en proyectos web y móviles, colaborando con equipos
                    multidisciplinarios y entregando soluciones de alta calidad para clientes de diversos sectores.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeInUp}
          >
            <Card className="h-full card-hover border-primary/20">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Filosofía</h3>
                  </div>
                  <p className="text-foreground/80">
                    Creo en el desarrollo centrado en el usuario, donde la funcionalidad y la estética se combinan para
                    crear experiencias digitales memorables. Cada línea de código tiene un propósito y cada diseño una
                    intención.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={fadeInUp}
          >
            <Card className="h-full card-hover border-primary/20">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Pasiones</h3>
                  </div>
                  <p className="text-foreground/80">
                    Además del desarrollo, me apasiona la fotografía, los viajes y la música. Estas actividades me
                    inspiran y me ayudan a mantener una perspectiva fresca en mi trabajo creativo.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
