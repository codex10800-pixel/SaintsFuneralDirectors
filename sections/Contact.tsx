"use client";
import { useState } from "react"
import Image from "next/image"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Website enquiry from ${name || "Visitor"}`
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`
    window.location.href = `mailto:info@saintsfuneraldirectors.co.za?subject=${encodeURIComponent(subject)}&body=${body}`
  }

  return (
    <section id="contact" className="py-24 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-xl overflow-hidden h-80 md:h-96">
            <Image src="/amathole/assets/img/bg-map.png" alt="map" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-primary/60 mix-blend-multiply"></div>
            <div className="absolute inset-0 flex flex-col justify-center p-8">
              <h3 className="text-2xl font-heading text-white">Let us help you say goodbye with grace</h3>
              <p className="text-white/90 mt-3">Call our customer care team for immediate assistance or send a message and we will respond promptly.</p>

              <div className="mt-6 flex gap-3">
                <a href="tel:+27656201771" className="inline-block px-4 py-3 bg-accent text-primary font-semibold rounded">Call Us Now</a>
                <a href="https://wa.me/27656201771" className="inline-block px-4 py-3 border border-white/20 text-white rounded">WhatsApp</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-heading">Get In Touch</h3>
            <p className="text-muted mt-2">Fill the form and we'll be in touch as soon as possible.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="sr-only">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="w-full p-3 rounded-md bg-white/6" />
              </div>
              <div>
                <label className="sr-only">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="w-full p-3 rounded-md bg-white/6" />
              </div>
              <div>
                <label className="sr-only">Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help?" rows={6} className="w-full p-3 rounded-md bg-white/6 resize-none" />
              </div>
              <div>
                <button type="submit" className="px-6 py-3 bg-primary text-white font-semibold rounded">Send Message</button>
              </div>
            </form>

            <div className="mt-6 text-sm text-muted">
              <div><strong>Address:</strong> 41 Khuzimpi Shezi Road, Durban, 4001</div>
              <div className="mt-1"><strong>Phone:</strong> <a href="tel:+27656201771" className="text-paper">065 620 1771</a></div>
              <div className="mt-1"><strong>Customer Care:</strong> <a href="tel:+27656201771" className="text-paper">065 620 1771</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
