"use client";
import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin?.(ScrollTrigger)

export default function About() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    gsap.fromTo(el.querySelectorAll(".reveal"), { y: 40, opacity: 0 }, {
      y: 0,
      opacity: 1,
      stagger: 0.12,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 80%" }
    })
  }, [])

  return (
    <section id="about" className="py-24 scroll-mt-28 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center" ref={ref}>
        <div className="reveal">
          <h2 className="text-3xl md:text-4xl font-heading drop-shadow-lg">A Compassionate Approach</h2>
          <p className="mt-4 text-muted text-lg leading-relaxed">Saints Funeral Directors provide bespoke services, guided by experienced professionals. We craft meaningful ceremonies tailored to the life being celebrated.</p>
          <ul className="mt-8 space-y-4 text-muted">
            <li className="reveal flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-300">
              <span className="text-accent text-2xl font-bold mt-1">✓</span>
              <span className="text-base">Personal tributes & ceremonial planning</span>
            </li>
            <li className="reveal flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-300">
              <span className="text-accent text-2xl font-bold mt-1">✓</span>
              <span className="text-base">24/7 support for families</span>
            </li>
            <li className="reveal flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-300">
              <span className="text-accent text-2xl font-bold mt-1">✓</span>
              <span className="text-base">Expert guidance for legal matters</span>
            </li>
          </ul>
        </div>
        <div className="reveal relative w-full h-64 md:h-96 rounded-2xl overflow-hidden card-glass shadow-xl-premium hover-lift group">
          <Image src="/amathole/assets/img/about.png" alt="memorial" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10"></div>
        </div>
      </div>
    </section>
  )
}
