'use client'

import Image from "next/image"

const values = [
  {
    icon: "🤝",
    title: "Compassion",
    text: "We walk beside every family with empathy, dignity, and heartfelt care during life's most difficult moments."
  },
  {
    icon: "✓",
    title: "Professional Excellence",
    text: "Our experienced team handles every detail with precision, respect, and the highest professional standards."
  },
  {
    icon: "⏰",
    title: "24/7 Support",
    text: "Day or night, we remain available to guide and support families whenever they need us most."
  }
]

const services = [
  "Funeral planning & coordination",
  "Memorial and celebration services",
  "Burial & cremation arrangements",
  "Transportation & logistics",
  "Legal documentation assistance",
  "Personalized tributes & floral arrangements"
]

export default function AboutPage() {
  return (
    <main className="bg-white text-primary overflow-hidden">
      {/* HERO SECTION */}
      {/* INTRO SECTION */}
      <section className="relative py-28 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent">

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/30 to-transparent blur-2xl opacity-70 group-hover:opacity-100 transition duration-500" />

            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/amathole/assets/img/about.png"
                alt="Funeral service"
                width={700}
                height={900}
                className="object-cover w-full h-[650px] rounded-3xl transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-10 -right-6 bg-white backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl max-w-xs">
              <p className="text-4xl font-bold text-gold">15+</p>
              <p className="mt-2 text-muted">
                Years of serving families with compassion and excellence.
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-gold uppercase tracking-[0.3em] text-sm">
              About Us
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight text-primary">
              Compassion Beyond
              <span className="block text-gold">Funeral Services</span>
            </h2>

            <p className="mt-8 text-muted text-lg leading-relaxed">
              We understand that saying goodbye is one of life's most emotional
              journeys. Our role is not only to organize ceremonies, but to
              create meaningful moments of remembrance that celebrate the life,
              love, and legacy of every individual.
            </p>

            <p className="mt-6 text-muted text-lg leading-relaxed">
              Every family we serve receives personal attention, professional
              guidance, and compassionate care from the first conversation to
              the final farewell.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-4 hover:bg-blue-50/50 transition"
                >
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-muted">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARALLAX STRIP */}
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover scale-110"
          style={{
            backgroundImage:
              "url('/amathole/assets/img/rr.png')"
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <div className="text-5xl mb-6">🌹</div>

            <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight text-white">
              "Every Life Holds
              <span className="block text-gold">A Beautiful Story"</span>
            </h2>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-28 relative bg-gradient-to-b from-transparent via-blue-50/30 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-gold uppercase tracking-[0.3em] text-sm">
              Our Foundation
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-primary">
              Vision, Mission & Purpose
            </h2>
          </div>

          <div className="mt-20 grid lg:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-xl p-10 hover:-translate-y-3 transition duration-500 shadow-lg hover:shadow-xl hover:border-gold/30">
              <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition" />

              <h3 className="text-3xl font-bold text-gold">
                Our Vision
              </h3>

              <p className="mt-6 text-muted leading-relaxed text-lg">
                To become a trusted symbol of dignity, comfort, and excellence
                in funeral care, helping families honor loved ones with grace
                and meaning.
              </p>
            </div>

            {/* Mission */}
            <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-xl p-10 hover:-translate-y-3 transition duration-500 shadow-lg hover:shadow-xl hover:border-gold/30">
              <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition" />

              <h3 className="text-3xl font-bold text-gold">
                Our Mission
              </h3>

              <p className="mt-6 text-muted leading-relaxed text-lg">
                To provide compassionate funeral services that support families
                emotionally, spiritually, and professionally during difficult
                times.
              </p>
            </div>

            {/* Purpose */}
            <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-xl p-10 hover:-translate-y-3 transition duration-500 shadow-lg hover:shadow-xl hover:border-gold/30">
              <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition" />

              <h3 className="text-3xl font-bold text-gold">
                Our Purpose
              </h3>

              <p className="mt-6 text-muted leading-relaxed text-lg">
                We exist to help families celebrate life, preserve memories, and
                find peace through beautifully organized farewells.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-28 bg-white/50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-gold uppercase tracking-[0.3em] text-sm">
              What Defines Us
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-primary">
              Our Core Values
            </h2>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-gray-200 bg-white p-10 hover:bg-blue-50/50 transition duration-500 hover:-translate-y-2 shadow-lg"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-3xl">
                  {value.icon}
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-primary">
                  {value.title}
                </h3>

                <p className="mt-4 text-muted leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAMILY SUPPORT */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-transparent via-blue-50/30 to-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(58,173,225,0.08),transparent_45%)]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="text-6xl mb-4">👥</div>

          <h2 className="mt-8 text-4xl md:text-6xl font-bold leading-tight text-primary">
            Supporting Families
            <span className="block text-gold">
              Every Step Of The Way
            </span>
          </h2>

          <p className="mt-8 text-xl text-muted leading-relaxed">
            From planning and documentation to memorial ceremonies and emotional
            support, we are committed to guiding families with compassion,
            patience, and professionalism.
          </p>

          <div className="mt-12">
            <button className="px-10 py-5 rounded-full bg-gold text-black font-semibold hover:bg-accent transition duration-300">
              Speak With Our Team
            </button>
          </div>
        </div>
      </section>

      {/* CUSTOM ANIMATIONS */}
    </main>
  )
}