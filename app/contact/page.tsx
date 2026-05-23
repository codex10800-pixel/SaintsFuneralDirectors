"use client"
import { FormEvent, useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MessageSquare, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || ""
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || ""
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value || ""
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || ""
    
    const subject = encodeURIComponent("Website Contact: " + name)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`)
    const mailto = `mailto:info@saintsfuneraldirectors.co.za?subject=${subject}&body=${body}`
    window.location.href = mailto
  }

  return (
    <main className="bg-white text-primary overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
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
            <MessageSquare size={16} className="text-accent" />
            <span className="text-sm tracking-wide text-primary font-semibold">24/7 Support Available</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Get in Touch
            <span className="block text-accent">We're Here to Help</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto"
          >
            Reach out to our compassionate team. We're available 24/7 to answer your questions and provide support.
          </motion.p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative group bg-white rounded-2xl p-8 border border-accent/10 shadow-premium hover-lift"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-accent/15 border border-accent/20 flex items-center justify-center mb-4">
                  <Phone className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Phone</h3>
                <p className="text-muted text-sm mb-4">Customer Care</p>
                <a href="tel:+27656201771" className="inline-block text-lg font-semibold text-accent hover:text-accent/80 transition-colors">
                  065 620 1771
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative group bg-white rounded-2xl p-8 border border-accent/10 shadow-premium hover-lift"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-accent/15 border border-accent/20 flex items-center justify-center mb-4">
                  <MessageSquare className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">WhatsApp</h3>
                <p className="text-muted text-sm mb-4">Quick messaging</p>
                <a href="https://wa.me/27656201771" target="_blank" rel="noopener noreferrer" className="inline-block text-lg font-semibold text-accent hover:text-accent/80 transition-colors">
                  065 620 1771
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group bg-white rounded-2xl p-8 border border-accent/10 shadow-premium hover-lift"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-accent/15 border border-accent/20 flex items-center justify-center mb-4">
                  <Mail className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
                <p className="text-muted text-sm mb-4">Professional inquiries</p>
                <a href="mailto:info@saintsfuneraldirectors.co.za" className="inline-block text-lg font-semibold text-accent hover:text-accent/80 transition-colors break-all">
                info@saintsfuneraldirectors.co.za
                </a>
              </div>
            </motion.div>
          </div>

          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group bg-gradient-to-br from-white via-white to-accent/5 rounded-3xl p-12 border border-accent/10 shadow-premium"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-primary mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-semibold text-primary mb-2">Your Name *</label>
                      <input
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-accent/20 bg-white/50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all duration-300 text-primary placeholder-muted"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-semibold text-primary mb-2">Your Email *</label>
                      <input
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-accent/20 bg-white/50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all duration-300 text-primary placeholder-muted"
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-semibold text-primary mb-2">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="065 620 1771"
                      className="w-full px-4 py-3 rounded-lg border border-accent/20 bg-white/50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all duration-300 text-primary placeholder-muted"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-semibold text-primary mb-2">Message *</label>
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      required
                      className="w-full px-4 py-3 rounded-lg border border-accent/20 bg-white/50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all duration-300 text-primary placeholder-muted resize-none"
                    ></textarea>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4"
                  >
                    <button
                      type="submit"
                      className="px-8 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Send Message
                    </button>
                    <span className="text-sm text-muted">This opens your email client to send the message.</span>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOURS & INFO SECTION */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-accent/10 shadow-premium"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center">
                  <Clock className="text-accent" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-primary">Hours of Operation</h3>
              </div>
              <p className="text-lg font-semibold text-accent mb-2">24/7 Assistance</p>
              <p className="text-muted">We are always available to support you and your family, day or night.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-accent/10 shadow-premium"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center">
                  <MapPin className="text-accent" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-primary">Service Area</h3>
              </div>
              <p className="text-muted">We proudly serve families throughout the region with dignity, compassion, and professionalism.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS SECTION */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-accent/10 shadow-premium"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.671635504669!2d26.36140763412106!3d-31.39561648629283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e883399eead73fd%3A0xa2b29cca4486a16d!2sSaints%20Funerals%20Molteno!5e0!3m2!1sen!2sza!4v1779525353394!5m2!1sen!2sza"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[280px] md:h-[450px]"
            />
          </motion.div>
        </div>
      </section>
    </main>
  )
}
