'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

const caskets = [
  { title: "Economy Range", price: "From R150", desc: "Affordable, respectful options with reliable workmanship. Ideal for families on a budget.", img: "/amathole/assets/img/services-image/6.jpg" },
  { title: "Standard Range", price: "From R350", desc: "A balance of quality and value — carefully finished and available in multiple styles.", img: "/amathole/assets/img/services-image/1.jpg" },
  { title: "Premium Range", price: "From R800", desc: "Hand-finished materials and premium fittings for an elevated tribute.", img: "/amathole/assets/img/services-image/4.jpg" },
  { title: "Dome — Wooden", desc: "Traditional wooden dome designs offering a dignified presentation for special services.", img: "/amathole/assets/img/featured-services-image/2.jpg", cta: "Enquire" },
  { title: "Dome — Metal", desc: "Durable metal dome options with premium finishes and long-lasting protection.", img: "/amathole/assets/img/featured-services-image/3.jpg", cta: "Enquire" },
  { title: "Eco-Friendly Options", desc: "Biodegradable materials for an environmentally conscious farewell.", img: "/amathole/assets/img/featured-services-image/1.jpg", cta: "Learn more" }
]

export default function CasketsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <main className="bg-white text-primary overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent/20 bg-accent/10 mb-6"
          >
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm tracking-wide text-primary font-semibold">Premium Selections</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Caskets & Dome
            <span className="block text-accent">Options</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto"
          >
            A curated selection of caskets and dome options — handcrafted, durable and designed to honour your loved ones.
          </motion.p>
        </div>
      </section>

      {/* CASKETS GRID SECTION */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {caskets.map((item, index) => (
              <motion.article
                key={item.title}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl overflow-hidden border border-accent/10 shadow-premium hover-lift transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-accent/10 to-primary/10">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Container */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-muted leading-relaxed">{item.desc}</p>

                  {/* Price Badge */}
                  {item.price && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-6"
                    >
                      <span className="inline-block px-6 py-2 bg-accent/15 border border-accent/30 text-accent font-bold rounded-lg">
                        {item.price}
                      </span>
                    </motion.div>
                  )}

                  {/* CTA Button */}
                  {item.cta && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mt-6"
                    >
                      <a
                        href="/contact"
                        className="inline-block px-6 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        {item.cta}
                      </a>
                    </motion.div>
                  )}
                </div>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-accent/50 w-0 group-hover:w-full transition-all duration-500" />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">Need Help Choosing?</h2>
            <p className="text-lg text-muted mb-8">
              Our compassionate team is here to guide you through our selection and help you find the perfect option for your loved one.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Contact Our Team
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
