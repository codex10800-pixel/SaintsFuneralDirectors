"use client";
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin?.(ScrollTrigger)

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll(".stat")
    els.forEach((el, i) => {
      gsap.fromTo(el, { y: 30, opacity: 0 }, {
        y: 0,
        opacity: 1,
        delay: i * 0.12,
        duration: 0.8,
        scrollTrigger: { trigger: el, start: "top 90%" }
      })
    })
  }, [])

  const stats = [
    { label: "Branches", value: "56" },
    { label: "Clients and Counting", value: "200,000+" },
    { label: "Years Experience", value: "19" },
    { label: "FSP Number", value: "46450" }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 via-primary/3 to-transparent">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-heading drop-shadow-lg">Why Choose Us</h3>
        <p className="text-muted mt-3 text-lg max-w-2xl mx-auto">Trust, experience and a deeply personal approach.</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" ref={ref}>
          {stats.map((s) => (
            <div key={s.label} className="stat p-8 rounded-2xl card-glass shadow-premium hover:shadow-deep text-center transition-all duration-500 hover-lift group">
              <div className="text-4xl md:text-5xl font-bold soft-gold group-hover:animate-scale-in">{s.value}</div>
              <div className="mt-3 text-muted text-base font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
