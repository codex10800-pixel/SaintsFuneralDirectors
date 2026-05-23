"use client";
import Image from "next/image"
import { motion } from "framer-motion"

const services = [
  { title: "Funeral Services", img: "/amathole/assets/img/services-image/1.jpg" },
  { title: "Burial Plans", img: "/amathole/assets/img/services-image/2.jpg" },
  { title: "Repatriation", img: "/amathole/assets/img/services-image/3.jpg" },
  { title: "Tombstones", img: "/amathole/assets/img/services-image/4.jpg" },
  { title: "Funeral Transport", img: "/amathole/assets/img/services-image/5.jpg" },
  { title: "Caskets", img: "/amathole/assets/img/services-image/6.jpg" },
  { title: "Family Support", img: "/amathole/assets/img/services-image/7.jpg" }
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-transparent to-primary/5 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-heading text-center">Our Services</h3>
        <p className="text-center text-muted mt-2 max-w-2xl mx-auto">A full suite of services delivered with care and attention to every detail.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <motion.div key={s.title} whileHover={{ scale: 1.02 }} className="relative rounded-xl overflow-hidden shadow-lg group">
              {/* image */}
              <div className="relative h-64 md:h-72 lg:h-80">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              </div>

              {/* overlay content */}
              <div className="absolute left-6 right-6 bottom-6">
                <div className="bg-white/6 backdrop-blur-sm p-4 rounded-md text-white">
                  <h4 className="text-lg md:text-xl font-semibold">{s.title}</h4>
                  <p className="text-sm text-white/90 mt-1">A premium, respectful service tailored to your needs.</p>
                  <div className="mt-3">
                    <a href="#" className="inline-block text-base font-semibold px-5 py-3 sm:px-4 sm:py-2 rounded-md border border-white/20 hover:bg-white/10 transition">Learn more</a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
