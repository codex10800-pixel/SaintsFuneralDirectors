export default function SaintsRegistrationLoading() {
  return (
    <main className="bg-gradient-to-b from-blue-50 to-white text-primary min-h-screen">
      <section className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl bg-white p-8 shadow-2xl space-y-6">
            {/* Header */}
            <div className="space-y-4 text-center">
              <div className="h-12 bg-gray-200 rounded w-2/3 mx-auto animate-pulse" />
              <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto animate-pulse" />
            </div>

            {/* Form fields */}
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse" />
                  <div className="h-10 bg-gray-200 rounded animate-pulse" />
                </div>
              ))}
            </div>

            {/* Submit button */}
            <div className="h-12 bg-gray-300 rounded animate-pulse" />
          </div>
        </div>
      </section>
    </main>
  )
}
