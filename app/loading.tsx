export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Logo/Text */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-accent/20 rounded-full blur-2xl animate-pulse" />
          <div className="relative px-8 py-4 rounded-full bg-gradient-to-r from-gold/10 to-accent/10 border border-gold/30">
            <h1 className="text-3xl font-bold text-primary">Saints</h1>
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="relative w-16 h-16">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-gold border-r-gold animate-spin" />
          
          {/* Middle rotating ring (slower) */}
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-accent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }} />
          
          {/* Inner pulsing dot */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gold to-accent animate-pulse" />
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <p className="text-lg font-semibold text-primary mb-2">Loading</p>
          <p className="text-sm text-muted animate-pulse">Preparing your experience...</p>
        </div>

        {/* Progress indicator dots */}
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-gold animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-2 h-2 rounded-full bg-gold animate-bounce" style={{ animationDelay: '0.1s' }} />
          <div className="w-2 h-2 rounded-full bg-gold animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
      </div>
    </div>
  )
}
