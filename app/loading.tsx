export default function Loading() {
  return (
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
  )
}
