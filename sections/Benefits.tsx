"use client";
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Globe, Lock, Zap, Smile } from "lucide-react"

gsap.registerPlugin?.(ScrollTrigger)

const benefits = [
  {
    icon: Globe,
    title: "Wide Coverage",
    description: "56 branches across the region ensuring we're never far from you.",
    color: "from-blue-500/10 to-blue-500/5"
  },
  {
    icon: Lock,
    title: "Secure & Confidential",
    description: "Your privacy and sensitive information are always protected.",
    color: "from-green-500/10 to-green-500/5"
  },
  {
    icon: Zap,
    title: "Instant Support",
    description: "Get immediate assistance through phone, WhatsApp, or email.",
    color: "from-yellow-500/10 to-yellow-500/5"
  },
  {
    icon: Smile,
    title: "Personal Touch",
    description: "Every ceremony is customized to honor your loved one's unique life.",
    color: "from-pink-500/10 to-pink-500/5"
  }
]

export default function BenefitsSection() {
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
    
    // Staggered card animations
    gsap.fromTo(
      containerRef.current.querySelectorAll(".benefit-card"),
      { y: 100, opacity: 0, rotation: -5 },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 75%" }
      }
    )
  }, [])

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-transparent via-accent/3 to-transparent">
      {/* Animated parallax background shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl"
          style={{
            y: scrollY * 0.15,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl"
          style={{
            y: scrollY * -0.15,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
          style={{
            y: scrollY * 0.2,
          }}
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
          <span className="text-accent uppercase tracking-widest font-semibold text-sm">Why Choose Us</span>
          <h2 className="mt-4 text-5xl font-bold text-primary">Built for Your Peace of Mind</h2>
          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto">
            Experience the difference of a dedicated team committed to making difficult times easier.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="benefit-card group relative"
              >
                {/* Card background with gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Main card */}
                <div className="relative bg-white rounded-2xl p-8 border border-accent/10 shadow-premium hover:shadow-deep transition-all duration-500 h-full">
                  {/* Icon container */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-16 h-16 rounded-2xl bg-accent/15 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/25 transition-colors duration-300"
                  >
                    <Icon className="text-accent" size={32} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Animated underline */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-accent/50 w-0 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom accent section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-12 border border-accent/20 text-center"
        >
          <h3 className="text-3xl font-bold text-primary mb-4">
            Ready to Learn More?
          </h3>
          <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
            Explore our comprehensive services and find the perfect plan for your family's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services"
              className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Our Services
            </a>
            <a
              href="/pricing"
              className="px-8 py-4 border-2 border-accent text-accent hover:bg-accent/10 font-semibold rounded-lg transition-all duration-300"
            >
              View Plans
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
