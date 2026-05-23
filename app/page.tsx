import Hero from "../components/Hero"
import FloatingParticles from "../components/FloatingParticles"
import About from "../sections/About"
import Plans from "../sections/Plans"
import WhyChooseUs from "../sections/WhyChooseUs"
import Testimonials from "../sections/Testimonials"
import Gallery from "../sections/Gallery"
import Process from "../sections/Process"
import TrustValues from "../sections/TrustValues"
import Benefits from "../sections/Benefits"
import CTA from "../sections/CTA"

export default function Home() {
  return (
    <>
      <FloatingParticles />
      <Hero />
      <About />
      <Process />
      <Plans />
      <TrustValues />
      <Benefits />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <CTA />
    </>
  )
}
