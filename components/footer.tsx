"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
            className="mb-8"
          >
            <Link href="#home" className="text-2xl font-bold gradient-heading">
              DevPortfolio
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeIn}
            className="flex space-x-6 mb-8"
          >
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
            className="text-center mb-8"
          >
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <Link href="#home" className="text-foreground/70 hover:text-primary transition-colors">
                Inicio
              </Link>
              <Link href="#about" className="text-foreground/70 hover:text-primary transition-colors">
                Sobre mí
              </Link>
              <Link href="#projects" className="text-foreground/70 hover:text-primary transition-colors">
                Proyectos
              </Link>
              <Link href="#skills" className="text-foreground/70 hover:text-primary transition-colors">
                Habilidades
              </Link>
              <Link href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
                Contacto
              </Link>
            </nav>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeIn}
            className="text-center text-foreground/60 text-sm"
          >
            <p>© {new Date().getFullYear()} DevPortfolio. Todos los derechos reservados.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeIn}
            className="mt-8"
          >
            <Button variant="outline" size="icon" onClick={scrollToTop} className="rounded-full">
              <ArrowUp className="w-4 h-4" />
              <span className="sr-only">Volver arriba</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
