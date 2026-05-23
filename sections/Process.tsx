"use client";
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Phone, FileText, Flower2, Heart } from "lucide-react"

gsap.registerPlugin?.(ScrollTrigger)

const steps = [
  {
    icon: Phone,
    title: "Reach Out",
    description: "Contact our 24/7 team to discuss your needs and preferences."
  },
  {
    icon: FileText,
    title: "Plan Together",
    description: "We work with you to create a meaningful and personalized service."
  },
  {
    icon: Flower2,
    title: "Honor Memory",
    description: "Execute a beautiful ceremony that celebrates their life."
  },
  {
    icon: Heart,
    title: "Ongoing Support",
    description: "We continue to support your family through the grieving process."
  }
]

export default function Process() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    
    // Animate step cards with stagger
    gsap.fromTo(
      containerRef.current.querySelectorAll(".process-step"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 75%" }
      }
    )

    // Animate connecting lines
    const lines = containerRef.current.querySelectorAll(".step-line")
    lines.forEach((line, i) => {
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          delay: (i + 1) * 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 75%" }
        }
      )
    })
  }, [])

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
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
          <span className="text-accent uppercase tracking-widest font-semibold text-sm">Our Process</span>
          <h2 className="mt-4 text-5xl font-bold text-primary">How We Help You</h2>
          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto">
            A compassionate, step-by-step process designed to support you through every moment.
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="process-step">
                {/* Connecting line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="step-line absolute hidden lg:block top-24 -right-4 w-8 h-1 bg-gradient-to-r from-accent/50 to-transparent origin-left" />
                )}

                {/* Step Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative bg-white rounded-2xl p-8 border border-accent/10 shadow-premium hover:shadow-deep transition-all duration-500"
                >
                  {/* Number badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center mb-6 group-hover:bg-accent/25 group-hover:scale-110 transition-all duration-300">
                    <Icon className="text-accent" size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-accent/50 w-0 group-hover:w-full transition-all duration-500" />
                </motion.div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Planning Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}
