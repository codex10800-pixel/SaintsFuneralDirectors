"use client";
import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin?.(ScrollTrigger)

const testimonials = [
  {
    name: "Emma T.",
    text: "Saints made everything gentle and dignified. We felt supported every step of the way.",
    img: "/amathole/assets/img/client-image/1.jpg"
  },
  {
    name: "James R.",
    text: "A truly compassionate team. The ceremony was beautifully handled.",
    img: "/amathole/assets/img/client-image/2.jpg"
  },
  {
    name: "Aisha K.",
    text: "Professional and kind — they listened and delivered beyond expectations.",
    img: "/amathole/assets/img/client-image/3.jpg"
  },
  {
    name: "Thabo M.",
    text: "They took care of every detail and allowed our family to grieve in peace.",
    img: "/amathole/assets/img/client-image/4.jpg"
  }
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    gsap.fromTo(
      ref.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" }
      }
    )
  }, [])

  useEffect(() => {
    if (!autoplay) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 4500)
    return () => clearInterval(id)
  }, [autoplay])

  const prev = () => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }
  const next = () => {
    setIndex((i) => (i + 1) % testimonials.length)
    setAutoplay(false)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-transparent via-accent/5 to-transparent" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-heading drop-shadow-lg">Testimonials</h3>
        <p className="text-muted mt-3 text-lg">Stories from families we've supported.</p>

        <div className="relative mt-12">
          {/* slides */}
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`absolute inset-0 transition-all duration-700 ${i === index ? "opacity-100 z-10" : "opacity-0 pointer-events-none"}`}
            >
              <div className="p-8 md:p-12 rounded-2xl card-glass shadow-xl-premium md:flex md:items-center md:gap-8 text-left hover-lift">
                <div className="w-32 h-32 relative rounded-full overflow-hidden flex-shrink-0 shadow-deep border-4 border-accent/30">
                  <Image src={t.img} alt={t.name} fill sizes="128px" className="object-cover" />
                </div>
                <div className="mt-6 md:mt-0">
                  <p className="text-lg md:text-xl text-muted italic leading-relaxed">"{t.text}"</p>
                  <div className="mt-4 text-lg font-bold text-primary">— {t.name}</div>
                </div>
              </div>
            </div>
          ))}

          {/* controls */}
          <div className="absolute -left-2 top-1/2 -translate-y-1/2">
            <button onClick={prev} aria-label="Previous testimonial" className="p-2 bg-white/6 rounded-full shadow">
              <FiChevronLeft />
            </button>
          </div>
          <div className="absolute -right-2 top-1/2 -translate-y-1/2">
            <button onClick={next} aria-label="Next testimonial" className="p-2 bg-white/6 rounded-full shadow">
              <FiChevronRight />
            </button>
          </div>

          {/* indicators */}
          <div className="relative mt-44 flex justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setIndex(i); setAutoplay(false) }}
                className={`w-2 h-2 rounded-full ${i === index ? "bg-accent w-8" : "bg-white/40"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
