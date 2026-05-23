export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        {/* Title Skeleton */}
        <div className="h-12 bg-gray-200 rounded-lg w-1/2 animate-pulse" />

        {/* Form Skeleton */}
        <div className="bg-white rounded-lg p-8 space-y-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse" />
              <div className="h-10 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
          <div className="h-10 bg-gray-200 rounded w-1/4 animate-pulse mt-6" />
        </div>
      </div>
    </div>
  )
}
