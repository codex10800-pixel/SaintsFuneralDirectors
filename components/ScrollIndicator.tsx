"use client";
import { useEffect, useState } from "react"

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 10)
    window.addEventListener("scroll", onScroll)
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div aria-hidden className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-all ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <div className="flex flex-col items-center gap-2">
        <div className="w-[28px] h-[42px] rounded-3xl border border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-sm animate-bounce"></div>
        </div>
        <div className="text-xs text-muted">Scroll</div>
      </div>
    </div>
  )
}
