"use client";
import Image from "next/image"
import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/amathole/assets/img/bg-map.png" alt="parallax" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary/90"></div>
        {/* Glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-40"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h3 initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-heading text-white drop-shadow-2xl">Let us help you say goodbye with grace</motion.h3>
        <motion.p initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-white/90 mt-6 text-lg md:text-xl drop-shadow-lg">Contact our compassionate team for guidance and support at any hour.</motion.p>
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-8">
          <a href="tel:+27656201771" className="px-8 py-4 rounded-lg bg-accent/90 hover:bg-accent text-white font-bold text-lg shadow-deep hover:shadow-xl transition-all duration-300 hover:scale-110 inline-block drop-shadow-lg">Call Us Now</a>
        </motion.div>
      </div>
    </section>
  )
}
