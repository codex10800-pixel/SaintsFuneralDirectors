"use client";
import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin?.(ScrollTrigger)

const allPlans = [
  {
    id: 1,
    type: "burial",
    title: "1-5 Member Burial Scheme",
    price: "R230",
    image: "/amathole/assets/img/featured-services-image/1.jpg",
    features: ["Casket", "Mortuary", "Tent x1", "Chairs x100"]
  },
  {
    id: 2,
    type: "burial",
    title: "1-7 Member Burial Scheme",
    price: "R240",
    image: "/amathole/assets/img/featured-services-image/2.jpg",
    features: ["Extended coverage", "Additional members", "Full service package"]
  },
  {
    id: 3,
    type: "burial",
    title: "1-9 Member Burial Scheme",
    price: "R250",
    image: "/amathole/assets/img/featured-services-image/3.jpg",
    features: ["Full burial cover", "Complete package", "Member support"]
  },
  {
    id: 4,
    type: "burial",
    title: "1-12 Member Burial Scheme",
    price: "R280",
    image: "/amathole/assets/img/services-image/1.jpg",
    features: ["Premium coverage", "Extended support", "Full benefits"]
  },
  {
    id: 5,
    type: "presidential",
    title: "Izwelonke Plan",
    price: "R500",
    category: "Presidential Plan",
    image: "/amathole/assets/img/services-image/2.jpg",
    signup: "https://www1.easipol.co.za/OnlineForms/Default.aspx?signinid=438F2E8D-1687-4E01-9CDD-257576096C79&formname=Amathole"
  },
  {
    id: 6,
    type: "presidential",
    title: "Inala Plan",
    price: "R700",
    category: "Presidential Plan",
    image: "/amathole/assets/img/services-image/3.jpg",
    signup: "https://www1.easipol.co.za/OnlineForms/Default.aspx?signinid=438F2E8D-1687-4E01-9CDD-257576096C79&formname=Amathole"
  },
  {
    id: 7,
    type: "presidential",
    title: "Ubukhosi Plan",
    price: "R930",
    category: "Presidential Plan",
    image: "/amathole/assets/img/services-image/4.jpg",
    signup: "https://www1.easipol.co.za/OnlineForms/Default.aspx?signinid=438F2E8D-1687-4E01-9CDD-257576096C79&formname=Amathole"
  }
]

export default function Plans() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    gsap.fromTo(
      ref.current.querySelectorAll(".plan-card"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" }
      }
    )
  }, [])

  return (
    <section id="plans" className="py-24 bg-gray-50 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent uppercase tracking-widest font-semibold text-sm">Our Plans</span>
          <h2 className="mt-4 text-4xl font-bold text-primary">Funeral Plans</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Affordable burial schemes and premium presidential plans — transparent benefits and straightforward pricing.</p>
        </div>

        {/* Burial Schemes Title */}
        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-8 drop-shadow-lg">Burial Schemes</h3>

        {/* Plans Carousel */}
        <div className="relative">
          <div
            id="plans-carousel"
            className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory px-4 md:px-0"
            style={{ scrollBehavior: "smooth" }}
          >
            {allPlans.filter(p => p.type === "burial").map((plan) => (
              <div
                key={plan.id}
                className="plan-card snap-start flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-xl-premium hover:shadow-deep transition-all duration-500 group hover-lift border border-white/30"
              >
                {/* Plan Image */}
                <div className="relative h-48 w-full overflow-hidden shadow-lg">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10"></div>
                  <div className="absolute left-4 bottom-4 bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">{plan.price}</div>
                </div>

                {/* Plan Info */}
                <div className="p-6 bg-gradient-to-b from-white/95 to-white/90">
                  <h4 className="text-xl font-bold text-primary mb-3 drop-shadow-sm">{plan.title}</h4>
                  <div className="text-3xl font-bold text-accent mb-4 drop-shadow-md">{plan.price}</div>

                  {/* Features */}
                  {plan.features && (
                    <ul className="text-sm text-gray-700 space-y-2 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-accent font-bold text-lg">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    href="/saints-registration-form"
                    className="inline-block w-full text-center px-4 py-3 bg-gradient-to-r from-primary to-primary/90 text-white font-bold rounded-lg hover:from-primary/90 hover:to-primary shadow-deep hover:shadow-xl transition-all duration-300"
                  >
                    Sign Up
                  </Link>
                  
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Presidential Plans Title */}
        <h3 className="text-3xl md:text-4xl font-bold text-primary mt-16 mb-8 drop-shadow-lg">Presidential Plans</h3>

        {/* Presidential Plans Carousel */}
        <div className="relative">
          <div
            id="presidential-carousel"
            className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory px-4 md:px-0"
            style={{ scrollBehavior: "smooth" }}
          >
            {allPlans.filter(p => p.type === "presidential").map((plan) => (
              <div
                key={plan.id}
                className="plan-card snap-start flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-xl-premium hover:shadow-deep transition-all duration-500 group hover-lift border border-accent/20"
              >
                {/* Plan Image */}
                <div className="relative h-48 w-full overflow-hidden shadow-lg">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10"></div>
                  <div className="absolute left-4 bottom-4 bg-accent/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">{plan.price}</div>
                </div>

                {/* Plan Info */}
                <div className="p-6 bg-gradient-to-b from-white/95 to-white/90">
                  <div className="text-xs text-accent font-bold mb-2 uppercase tracking-widest drop-shadow-sm">{plan.category}</div>
                  <h4 className="text-xl font-bold text-primary mb-3 drop-shadow-sm">{plan.title}</h4>
                  <div className="text-3xl font-bold text-accent mb-6 drop-shadow-md">{plan.price}</div>

                  <Link
                    href="/saints-registration-form"
                    className="inline-block w-full text-center px-4 py-3 bg-gradient-to-r from-accent to-accent/90 text-white font-bold rounded-lg hover:from-accent/90 hover:to-accent shadow-deep hover:shadow-xl transition-all duration-300"
                  >
                    Sign Up
                  </Link>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
