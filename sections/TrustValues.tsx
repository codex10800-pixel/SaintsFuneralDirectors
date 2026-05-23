"use client";
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Shield, Users, Lightbulb, Award } from "lucide-react"

gsap.registerPlugin?.(ScrollTrigger)

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Transparent practices and honest communication guide everything we do."
  },
  {
    icon: Users,
    title: "Compassion",
    description: "We treat every family with the utmost care and respect during difficult times."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Modern solutions paired with timeless traditions create meaningful experiences."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Attention to detail and dedication ensure every service is exceptional."
  }
]

export default function TrustValues() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!containerRef.current) return
    
    // Animate cards
    gsap.fromTo(
      containerRef.current.querySelectorAll(".value-card"),
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 75%" }
      }
    )
  }, [])

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto" ref={containerRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-accent uppercase tracking-widest font-semibold text-sm">Our Values</span>
          <h2 className="mt-4 text-5xl font-bold text-primary">What We Believe In</h2>
          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto">
            Our core principles guide us to serve families with dignity, respect, and unwavering support.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="value-card group"
              >
                <div className="relative bg-gradient-to-br from-white to-white/95 rounded-2xl p-8 border border-accent/10 shadow-premium hover:shadow-deep transition-all duration-500 h-full">
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center mb-6"
                    >
                      <Icon className="text-accent" size={28} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-accent/50 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Trust badges section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white rounded-2xl p-8 border border-accent/10 shadow-premium text-center hover:shadow-deep transition-all duration-300 hover-lift">
            <div className="text-4xl font-bold text-accent mb-2">200K+</div>
            <p className="text-muted font-semibold">Families Served</p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-accent/10 shadow-premium text-center hover:shadow-deep transition-all duration-300 hover-lift">
            <div className="text-4xl font-bold text-accent mb-2">FSP 46450</div>
            <p className="text-muted font-semibold">Registered & Compliant</p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-accent/10 shadow-premium text-center hover:shadow-deep transition-all duration-300 hover-lift">
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <p className="text-muted font-semibold">Always Available</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
