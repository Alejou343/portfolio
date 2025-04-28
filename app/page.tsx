import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"

export const metadata: Metadata = {
  title: "Portfolio | Desarrollador Fullstack",
  description:
    "Portfolio profesional de un desarrollador fullstack especializado en crear experiencias web modernas y atractivas",
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <CustomCursor />
      <div className="texture-overlay" />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
