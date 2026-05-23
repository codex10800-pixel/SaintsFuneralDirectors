"use client"

import { useEffect, useState } from "react"

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const hideLoader = () => {
      setIsLoading(false)
    }

    const checkPageReady = () => {
      // Check if document is fully loaded
      if (document.readyState === "complete") {
        // Wait a bit more for images to render
        setTimeout(hideLoader, 5500)
        return true
      }
      return false
    }

    // If already loaded when component mounts
    if (checkPageReady()) {
      return
    }

    // Listen for when DOM is fully parsed and resources loaded
    const handleReadyStateChange = () => {
      if (document.readyState === "complete") {
        setTimeout(hideLoader, 5500)
      }
    }

    // Listen for window load event (all images and stylesheets loaded)
    const handleLoad = () => {
      // Wait a bit more to ensure images are rendered
      setTimeout(hideLoader, 5800)
    }

    document.addEventListener("readystatechange", handleReadyStateChange)
    window.addEventListener("load", handleLoad)

    // Maximum timeout of 10 seconds as fallback
    const maxTimeout = setTimeout(hideLoader, 10000)

    return () => {
      document.removeEventListener("readystatechange", handleReadyStateChange)
      window.removeEventListener("load", handleLoad)
      clearTimeout(maxTimeout)
    }
  }, [])

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            {/* Spinner Animation */}
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-4 border-gold/20" />
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-gold border-r-gold animate-spin" />
            </div>

            {/* Text */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary mb-2">Saints Funeral Directors</h2>
              <p className="text-muted text-sm">Loading...</p>
            </div>

            {/* Animated dots */}
            <div className="flex gap-2 mt-4">
              <div className="w-2 h-2 rounded-full bg-gold animate-bounce" style={{ animationDelay: "0s" }} />
              <div className="w-2 h-2 rounded-full bg-gold animate-bounce" style={{ animationDelay: "0.2s" }} />
              <div className="w-2 h-2 rounded-full bg-gold animate-bounce" style={{ animationDelay: "0.4s" }} />
            </div>
          </div>
        </div>
      )}
      {children}
    </>
  )
}
