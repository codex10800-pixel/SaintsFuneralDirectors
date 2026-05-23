export default function ContactLoading() {
  return (
    <main className="bg-white text-primary overflow-hidden">
      <section className="min-h-screen flex items-center justify-center pt-24">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left side */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="h-12 bg-gray-200 rounded w-2/3 animate-pulse" />
                <div className="h-6 bg-gray-200 rounded w-full animate-pulse" />
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-20 bg-gray-200 rounded animate-pulse" />
                ))}
              </div>
            </div>

            {/* Right side - Form */}
            <div className="h-96 bg-gray-200 rounded-2xl animate-pulse" />
          </div>
        </div>
      </section>
    </main>
  )
}
