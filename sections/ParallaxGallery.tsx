"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ParallaxGallery() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const layers = Array.from(el.querySelectorAll<HTMLElement>("[data-parallax]"));
    let raf = 0;

    const loop = () => {
      const scrollY = window.scrollY;
      layers.forEach((layer) => {
        const speed = parseFloat(layer.dataset.parallax || "0");
        layer.style.transform = `translateY(${scrollY * speed}px) scale(1.02)`;
      });
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    // Intersection Observer for reveal animations
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-scale-in");
        }
      });
    }, { threshold: 0.2 });

    layers.forEach((layer) => obs.observe(layer));
    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, []);

  const imgs = [
    { src: "/amathole/assets/img/featured-services-image/1.jpg", title: "Ceremony Planning" },
    { src: "/amathole/assets/img/featured-services-image/2.jpg", title: "Respectful Service" },
    { src: "/amathole/assets/img/featured-services-image/3.jpg", title: "Family Support" },
    { src: "/amathole/assets/img/blog-image/4.png", title: "Dignified Care" },
    { src: "/amathole/assets/img/blog-image/6.jpg", title: "Memorial Design" },
    { src: "/amathole/assets/img/blog-image/7.jpg", title: "Professional Transport" },
  ];

  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-semibold">Our Gallery</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">Moments & Memories</h2>
          <p className="text-muted max-w-2xl mx-auto mt-4 text-lg">A parallax journey capturing respectful, dignified moments through our compassionate services.</p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imgs.map((item, i) => (
            <div 
              key={i} 
              data-parallax={0.06 + (i % 3) * 0.04} 
              className="group relative h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-premium hover-lift"
            >
              <Image 
                src={item.src} 
                alt={item.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
                sizes="(max-width: 768px) 100vw, 50vw" 
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/60 transition-all duration-500" />
              {/* Hover text reveal */}
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
