"use client";
import { useEffect, useRef } from "react";

const features = [
  { title: "Personalized Ceremonies", desc: "Tailored services to reflect a loved one’s life." },
  { title: "24/7 Support", desc: "Always available to assist and guide families." },
  { title: "Comprehensive Planning", desc: "From paperwork to final arrangements, we handle it." },
  { title: "Eco-friendly Options", desc: "Sustainable choices for environmentally conscious families." },
];

export default function Features() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll<HTMLElement>(".feature-card"));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-scale-in");
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((it) => obs.observe(it));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-20 px-6">
      <div ref={rootRef} className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Features</h2>
          <p className="text-muted max-w-2xl mx-auto mt-3">Meaningful services supported by compassionate expertise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="feature-card bg-white rounded-2xl p-6 shadow-premium">
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
