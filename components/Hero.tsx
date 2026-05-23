"use client";
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

const heroSlides = [
  {
    tag: "Pay online",
    heading: "Manage your Payments online",
    description: "We offer comprehensive funeral services from burial schemes to full funeral coverage. Allow us to assist you during your time of need.",
    image: "/amathole/assets/img/saints.png"
  },
  {
    tag: "A sneak peek at our new look!",
    heading: "10 Years of Experience",
    description: "Serving families with dedication and compassion across all our branches.",
    image: "/amathole/assets/img/background.png"
  },
  {
    tag: "Enjoy Your Life...",
    heading: "Knowing that we have your back!",
    description: "We offer all our clients a comprehensive service from burial schemes to full funeral service. Allow us to assist you during a time of need.",
    image: "/amathole/assets/img/saint.png"
  }
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!autoplay) return
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length)
        setIsTransitioning(false)
      }, 50)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoplay])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <section id="home" className="relative h-screen w-full overflow-hidden mt-24 scroll-mt-28">
      {/* Slides */}
      <div className="relative w-full h-full">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image with Multi-Layer Parallax */}
            <div
              style={{
                transform: `translateY(${scrollY * 0.5}px) scale(1.02)`,
                transition: "transform 0.12s ease-out"
              }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.heading}
                fill
                className="object-cover"
                sizes="100vw"
                priority={idx === 0}
              />
            </div>
            {/* Overlay with depth gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
            
            {/* Animated depth light effects */}
            <div className="absolute inset-0 opacity-30 mix-blend-overlay will-change-opacity">
              <div className="hidden sm:block absolute top-0 left-1/4 w-96 h-96 bg-blue-500/40 rounded-full blur-3xl" style={{ animation: "float 8s ease-in-out infinite" }}></div>
              <div className="hidden sm:block absolute bottom-0 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" style={{ animation: "float 10s ease-in-out infinite reverse" }}></div>
            </div>

            {/* Content - Staggered entrance animations on slide change */}
            <div
              ref={contentRef}
              className="relative h-full flex items-center"
              style={{
                opacity: Math.max(0.75, 1 - scrollY / 500),
                transform: `translateY(${scrollY * 0.25}px)`,
                transition: "all 0.12s ease-out"
              }}
            >
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 text-center md:text-left text-white">
                <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl">
                  <div 
                    className="inline-block bg-white/6 text-accent px-3 py-1 rounded-full text-sm font-semibold mb-4 animate-fade-in"
                    style={{ animation: isTransitioning ? "none" : "fadeIn 0.8s ease-out forwards" }}
                  >
                    {slide.tag}
                  </div>
                  <h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight"
                    style={{ animation: isTransitioning ? "none" : "fadeIn 0.8s ease-out 0.2s forwards" }}
                  >
                    {slide.heading}
                  </h1>
                  <p 
                    className="text-base md:text-lg text-white/90 mb-6"
                    style={{ animation: isTransitioning ? "none" : "fadeIn 0.8s ease-out 0.4s forwards" }}
                  >
                    {slide.description}
                  </p>
                  <div 
                    className="flex items-center gap-4"
                    style={{ animation: isTransitioning ? "none" : "fadeIn 0.8s ease-out 0.6s forwards" }}
                  >
                    <button className="px-6 py-3 sm:px-8 sm:py-3 bg-accent/95 hover:bg-accent text-white font-semibold rounded shadow-lg transition text-base hover:scale-105 transform duration-300">
                      Get A Quote
                    </button>
                    <Link href="/checkout" className="px-5 py-3 sm:px-6 border border-white/20 text-white hover:bg-white/10 font-semibold rounded transition text-base hover:scale-105 transform duration-300">
                      Pay Online
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators with smooth transitions */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrent(idx)
              setAutoplay(false)
            }}
            className={`rounded-full transition-all duration-300 ${idx === current ? 'bg-accent scale-125 w-4 h-4' : 'bg-white/40 hover:bg-white/60 w-3 h-3'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pb-16 animate-bounce">
        <div className="text-white/60 text-sm mb-2">Scroll to explore</div>
        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
