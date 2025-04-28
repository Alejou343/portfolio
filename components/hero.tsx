"use client";

import { motion } from "framer-motion";
import { Code, Globe, Server } from "lucide-react";
import { Button } from "./ui/button";
import ThreeJSComponent from "./robot"; // Import your 3D component

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-heading">Desarrollador Fullstack</h1>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <p className="text-xl md:text-2xl mb-8 text-foreground/80">Creando experiencias digitales excepcionales</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm">
              <Code size={18} className="text-primary" />
              <span>Frontend</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm">
              <Server size={18} className="text-primary" />
              <span>Backend</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm">
              <Globe size={18} className="text-primary" />
              <span>Web</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
          >
            <Button asChild size="lg" className="rounded-full">
              <a href="#projects">Ver proyectos</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Lienzo 3D con el robot */}
      <div className="absolute inset-0 z-0">
        <ThreeJSComponent />
      </div>
    </section>
  );
}
