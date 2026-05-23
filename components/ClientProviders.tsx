"use client";
import { useEffect } from "react"
export default function ClientProviders({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Lightweight smooth-scroll fallback: prefer native smooth behavior
    try {
      document.documentElement.style.scrollBehavior = "smooth"
    } catch (e) {}

    // keep a small ambient RAF for potential future animation hooks
    let raf = 0
    const loop = () => {
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
    }
  }, [])

  return <>{children}</>
}
