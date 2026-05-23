"use client";
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin?.(ScrollTrigger)

const photos = [
  "/amathole/assets/img/blog-image/1.jpg",
  "/amathole/assets/img/blog-image/2.jpg",
  "/amathole/assets/img/blog-image/3.jpg",
  "/amathole/assets/img/blog-image/4.png",
  "/amathole/assets/img/blog-image/5.jpg"
]

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    const images = ref.current.querySelectorAll(".gallery-item")
    gsap.fromTo(
      images,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" }
      }
    )
  }, [])
  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-blue-50/20 to-transparent">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <h3 className="text-3xl md:text-4xl font-heading text-center drop-shadow-lg">Memorial Gallery</h3>
        <p className="text-muted mt-3 text-center text-lg">A collection of peaceful imagery to comfort and inspire.</p>

        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((p) => (
            <div key={p} className="gallery-item break-inside-avoid rounded-xl overflow-hidden card-glass cursor-pointer hover:scale-105 transition-transform duration-500 hover-lift shadow-premium group">
              <div className="relative h-64 overflow-hidden">
                <Image src={p} alt="memorial" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover group-hover:scale-120 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
