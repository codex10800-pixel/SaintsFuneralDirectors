export default function CheckoutLoading() {
  return (
    <main className="bg-gray-50 text-primary min-h-screen">
      <section className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left skeleton */}
            <aside className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-2xl bg-white p-6 shadow-xl">
                  <div className="space-y-4">
                    <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
                  </div>
                </div>
                <div className="h-64 bg-gray-200 rounded-2xl animate-pulse" />
                <div className="h-32 bg-gray-200 rounded-2xl animate-pulse" />
              </div>
            </aside>

            {/* Right skeleton */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="h-8 bg-gray-200 rounded w-1/2 animate-pulse" />
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
                  </div>
                  <div className="h-96 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
