export default function PricingLoading() {
  return (
    <main className="bg-white text-primary overflow-hidden">
      <section className="min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 h-10 w-32 bg-gray-200 rounded-full animate-pulse" />
            <div className="h-12 bg-gray-200 rounded w-2/3 mx-auto mb-6 animate-pulse" />
            <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto animate-pulse" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-96 bg-gray-200 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
