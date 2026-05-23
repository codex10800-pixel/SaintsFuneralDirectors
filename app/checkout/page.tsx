import { Suspense } from "react"
import CheckoutContent from "./checkout-content"

function CheckoutSkeleton() {
  return (
    <main className="bg-gray-50 text-primary min-h-screen">
      <section className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <aside className="lg:col-span-5">
              <div className="h-96 bg-gray-200 rounded-2xl animate-pulse" />
            </aside>
            <div className="lg:col-span-7">
              <div className="h-96 bg-gray-200 rounded-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<CheckoutSkeleton />}>
      <CheckoutContent />
    </Suspense>
  )
}
