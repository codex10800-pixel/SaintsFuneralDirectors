"use client";
import { useEffect } from "react";

export default function FloatingParticles() {
  useEffect(() => {
    // Don't render heavy decorative particles on small screens
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia('(max-width: 640px)').matches) {
      return
    }

    const container = document.createElement("div");
    container.className = "pointer-events-none absolute inset-0 z-0";
    document.body.appendChild(container);

    const particles: HTMLDivElement[] = [];
    for (let i = 0; i < 20; i++) {
      const el = document.createElement("div");
      el.className = "floating-particle";
      el.style.left = Math.random() * 100 + "%";
      el.style.top = Math.random() * 100 + "%";
      el.style.opacity = String(0.03 + Math.random() * 0.2);
      el.style.transform = `translate3d(0,0,0) scale(${0.6 + Math.random() * 1.6})`;
      container.appendChild(el);
      particles.push(el);
    }

    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth - 0.5;
      mouseY = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("mousemove", onMouseMove);

    let rafId = 0;
    const anim = () => {
      const t = Date.now() / 1000;
      particles.forEach((p, i) => {
        const base = (i % 5) * 0.5 + 0.5;
        const x = Math.sin(t * (0.2 + i * 0.01)) * 15 + mouseX * base * 12;
        const y = Math.cos(t * (0.15 + i * 0.01)) * 15 + mouseY * base * 12;
        const scale = 0.6 + (i % 3) * 0.2;
        p.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
      });
      rafId = requestAnimationFrame(anim);
    };
    rafId = requestAnimationFrame(anim);

    const onScroll = () => {
      const scrollY = window.scrollY;
      container.style.transform = `translateY(${scrollY * 0.04}px)`;
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      try {
        document.body.removeChild(container);
      } catch {}
    };
  }, []);

  return null;
}
