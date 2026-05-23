"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import FloatingParticles from "../../components/FloatingParticles"
import ParallaxGallery from "../../sections/ParallaxGallery"
import Features from "../../sections/Features"

gsap.registerPlugin?.(ScrollTrigger)

const services = [
  { title: "Funeral Services", img: "/amathole/assets/img/blog-image/4.png", desc: "A premium, respectful service tailored to your needs.", features: ["Ceremony planning", "Venue coordination", "Guest management"] },
  { title: "Burial Plans", img: "/amathole/assets/img/logos.png", desc: "Choose a burial plan that provides peace of mind.", features: ["Flexible payment", "Comprehensive coverage", "Family support"] },
  { title: "Repatriation", img: "/amathole/assets/img/blog-image/9.jpg", desc: "International and domestic repatriation handled sensitively.", features: ["Documentation", "Transport coordination", "Legal assistance"] },
  { title: "Tombstones", img: "/amathole/assets/img/blog-image/6.jpg", desc: "Quality tombstone design and installation.", features: ["Custom designs", "Expert craftsmanship", "Long-lasting materials"] },
  { title: "Funeral Transport", img: "/amathole/assets/img/blog-image/7.jpg", desc: "Reliable, dignified transport for services.", features: ["Professional drivers", "Luxury vehicles", "24/7 availability"] },
  { title: "Caskets", img: "/amathole/assets/img/services-image/7.jpg", desc: "A wide selection of caskets to suit budgets.", features: ["Multiple styles", "Premium quality", "Eco-friendly options"] },
]

const benefits = [
  { number: "24/7", label: "Support", desc: "Always available when you need us most" },
  { number: "15+", label: "Years", desc: "Trusted by thousands of families" },
  { number: "100%", label: "Care", desc: "Dedicated to honoring your loved one" },
]

const process = [
  { step: "1", title: "Contact Us", desc: "Reach out to our compassionate team for guidance" },
  { step: "2", title: "Plan Together", desc: "We work with you to create a meaningful service" },
  { step: "3", title: "Execute With Care", desc: "Every detail is handled with professionalism" },
  { step: "4", title: "Support After", desc: "We're here for you beyond the service" },
]

export default function ServicesPage() {
  const heroRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const cards = document.querySelectorAll(".service-card")
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 60%",
            scrub: 1,
          },
        }
      )
    })

    const benefitItems = document.querySelectorAll(".benefit-item")
    benefitItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.15,
          ease: "back.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
        }
      )
    })

    const processItems = document.querySelectorAll(".process-item")
    processItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 75%",
          },
        }
      )
    })
  }, [])

  return (
    <main className="bg-white text-primary overflow-hidden">
      <FloatingParticles />
      {/* HERO SECTION WITH PARALLAX */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/5" />
          <div
            className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
            style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-6 py-3 bg-gold/10 rounded-full border border-gold/20">
            <span className="text-gold font-semibold">Comprehensive Care Services</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Services Crafted With
            <span className="block text-gold">Compassion & Excellence</span>
          </h1>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Every service we provide is designed with care, respect, and attention to detail. We're here to support you through every step of the journey.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 bg-gold hover:bg-accent text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              Explore Services
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary/5 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce text-center">
            <p className="text-sm text-muted mb-2">Scroll to explore</p>
            <svg className="w-6 h-6 text-gold mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES GRID */}
      <section className="py-28 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-semibold">Our Offerings</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">Complete Service Solutions</h2>
            <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">Comprehensive funeral services designed to honor your loved ones with dignity and respect</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="service-card group">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Background Image */}
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/70 transition-all duration-500" />

                  {/* Animated Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold transition-all duration-500 rounded-2xl" />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div></div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-white/90 leading-relaxed mb-4">{service.desc}</p>

                      {/* Features List */}
                      <ul className="space-y-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:translate-y-0 translate-y-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-white/80">
                            <span className="w-2 h-2 rounded-full bg-gold" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Button */}
                      <button className="mt-6 px-6 py-2 bg-gold hover:bg-accent text-black font-semibold rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        <Features />

      {/* BENEFITS SECTION */}
      <section className="py-28 px-6 relative overflow-hidden">
          <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-gold/5" />
          <div className="absolute top-1/2 right-0 md:-right-24 lg:-right-48 w-72 md:w-96 h-72 md:h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Why Choose Saints?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.label} className="benefit-item">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-white border-2 border-gold/20 rounded-2xl p-8 text-center group hover:border-gold transition-all duration-300 hover:shadow-xl">
                    <div className="text-5xl font-bold text-gold mb-2">{benefit.number}</div>
                    <h3 className="text-xl font-bold text-primary mb-3">{benefit.label}</h3>
                    <p className="text-muted">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ParallaxGallery />

      {/* PROCESS SECTION */}
      <section className="py-28 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-semibold">How We Work</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">Our Service Process</h2>
            <p className="mt-4 text-muted max-w-2xl mx-auto">A clear, compassionate approach to every service</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.title} className="process-item group relative">
                {/* Connecting Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[calc(100%+2rem)] h-1 bg-gradient-to-r from-gold/30 to-transparent group-hover:from-gold transition-all duration-500" />
                )}

                <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gold hover:shadow-xl transition-all duration-500 h-full">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center font-bold text-lg shadow-lg">
                      {item.step}
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-28 px-6 relative overflow-hidden">
          <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-gold/5 to-primary/10" />
          <div className="absolute top-1/2 left-0 md:-left-24 lg:-left-48 w-72 md:w-96 h-72 md:h-96 bg-gold/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
          <div className="absolute bottom-0 right-0 md:-right-24 lg:-right-48 w-72 md:w-96 h-72 md:h-96 bg-accent/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
              Our compassionate team is ready to help you plan a meaningful service that honors your loved one.
            </p>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-10 py-4 bg-gold hover:bg-accent text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Contact Our Team
            </button>
            <button className="px-10 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300">
              Browse Caskets
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
