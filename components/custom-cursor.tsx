"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const mouseDown = () => setCursorVariant("click")
    const mouseUp = () => setCursorVariant("default")
    const mouseEnterLink = () => setCursorVariant("hover")
    const mouseLeaveLink = () => setCursorVariant("default")

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mousedown", mouseDown)
    window.addEventListener("mouseup", mouseUp)

    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", mouseEnterLink)
      link.addEventListener("mouseleave", mouseLeaveLink)
    })

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("mousedown", mouseDown)
      window.removeEventListener("mouseup", mouseUp)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", mouseEnterLink)
        link.removeEventListener("mouseleave", mouseLeaveLink)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      backgroundColor: "rgba(147, 51, 234, 0.5)",
      height: 32,
      width: 32,
    },
    hover: {
      x: mousePosition.x,
      y: mousePosition.y,
      backgroundColor: "rgba(147, 51, 234, 0.8)",
      height: 64,
      width: 64,
    },
    click: {
      x: mousePosition.x,
      y: mousePosition.y,
      backgroundColor: "rgba(147, 51, 234, 0.4)",
      height: 24,
      width: 24,
    },
  }

  // Solo mostrar en dispositivos que no son táctiles
  return <motion.div className="custom-cursor hidden md:block" variants={variants} animate={cursorVariant} />
}
