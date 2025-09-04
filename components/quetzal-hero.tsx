"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface QuetzalHeroProps {
  children?: React.ReactNode
  showOverlay?: boolean
  overlayOpacity?: number
  parallaxIntensity?: number
}

export default function QuetzalHero({
  children,
  showOverlay = true,
  overlayOpacity = 0.7,
  parallaxIntensity = 20,
}: QuetzalHeroProps) {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const { top } = heroRef.current.getBoundingClientRect()
        setScrollY(-top / parallaxIntensity)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [parallaxIntensity])

  return (
    <div ref={heroRef} className="relative w-full h-screen overflow-hidden">
      {/* Background image with parallax effect */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${scrollY}px) scale(1.1)`,
        }}
      >
        <Image
          src="/images/el-quetzal-artwork.png"
          alt="El Quetzal"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Gradient overlay */}
      {showOverlay && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Animated accent elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 15,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <div className="container px-4 md:px-6">{children}</div>
      </div>
    </div>
  )
}
