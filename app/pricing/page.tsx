'use client'

import { motion } from 'framer-motion'
import {
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Crown,
  Check,
  PhoneCall,
  Flower2
} from 'lucide-react'

import Plans from "../../sections/Plans"

export default function PricingPage() {
  return (
    <main className="bg-white text-primary overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        </div>

        {/* Glow Effects */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <Sparkles size={16} className="text-[#D4AF37]" />
            <span className="text-sm tracking-wide">
              Transparent Funeral Packages
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-8 text-5xl md:text-7xl font-bold leading-tight"
          >
            Funeral Plans
            <span className="block text-[#D4AF37]">
              Designed With Care
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto"
          >
            We provide dignified and compassionate funeral packages tailored to
            every family’s needs. From simple arrangements to premium memorial
            services, each plan is created with respect, comfort, and
            professionalism.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <button className="px-8 py-4 bg-[#D4AF37] text-black font-semibold rounded-full hover:scale-105 transition duration-300">
              View Plans
            </button>

            <button className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md rounded-full hover:bg-white/10 transition duration-300">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>



      {/* PRICING SECTION */}
      <section className="relative py-32 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-accent uppercase tracking-[0.3em] text-sm font-semibold">
              Funeral Packages
            </span>

            <h2 className="mt-5 text-4xl md:text-6xl font-bold leading-tight text-primary">
              Choose The Right
              <span className="block text-accent">
                Plan For Your Family
              </span>
            </h2>

            <p className="mt-8 text-lg text-muted leading-relaxed">
              Whether you need a simple funeral arrangement or a premium
              memorial service, our plans are designed to provide comfort,
              dignity, and complete support.
            </p>
          </motion.div>

          {/* Your Plans Component */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <Plans />
          </motion.div>
        </div>
      </section>
      

      {/* INCLUDED FEATURES */}
      <section className="py-28 bg-gradient-to-b from-transparent via-accent/5 to-transparent border-y border-accent/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <span className="text-accent uppercase tracking-[0.3em] text-sm font-semibold">
              What's Included
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-primary">
              Every Plan Includes
            </h2>
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "24/7 Family Support",
              "Professional Funeral Coordination",
              "Transportation Arrangements",
              "Memorial Planning Assistance",
              "Compassionate Guidance",
              "Respectful Ceremony Management",
              "Documentation Assistance",
              "Personalized Tribute Options",
              "Dedicated Support Team"
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 rounded-2xl border border-accent/10 bg-white shadow-premium p-5 hover:shadow-lg transition"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Check className="text-accent" size={18} />
                </div>

                <span className="text-primary">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="relative py-24 border-y border-accent/10 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: HeartHandshake,
                title: "Compassionate Service",
                text: "Every family receives heartfelt support and professional guidance throughout the journey."
              },
              {
                icon: ShieldCheck,
                title: "Transparent Pricing",
                text: "Clear and honest pricing with no hidden costs, giving families peace of mind."
              },
              {
                icon: Crown,
                title: "Dignified Excellence",
                text: "We honor every life with elegant, respectful, and beautifully organized services."
              }
            ].map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-3xl border border-accent/10 bg-white shadow-premium p-10 hover:-translate-y-2 transition duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Icon size={30} className="text-accent" />
                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-primary">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-muted leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PARALLAX QUOTE */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative z-10 flex items-center justify-center text-center px-6 max-w-4xl mx-auto">
          <div className="max-w-4xl">
            <Flower2 className="mx-auto text-accent" size={50} />

            <h2 className="mt-8 text-4xl md:text-6xl font-bold leading-tight text-primary">
              "Honoring Every Life
              <span className="block text-accent">
                With Grace & Dignity”
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-primary/5" />
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <PhoneCall className="mx-auto text-accent" size={60} />

          <h2 className="mt-8 text-4xl md:text-6xl font-bold leading-tight text-primary">
            Need Immediate
            <span className="block text-accent">Funeral Assistance?</span>
          </h2>

          <p className="mt-8 text-lg md:text-xl text-muted leading-relaxed">
            Our compassionate team is available 24/7 to support your family and
            guide you through every step with care and professionalism.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <button className="px-10 py-5 rounded-full bg-accent hover:bg-accent/90 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg">
              Contact Us Now
            </button>

            <button className="px-10 py-5 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition duration-300">
              View Funeral Plans
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}