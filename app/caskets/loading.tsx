export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        {/* Hero Skeleton */}
        <div className="text-center space-y-4">
          <div className="h-12 bg-gray-200 rounded-lg w-3/4 mx-auto animate-pulse" />
          <div className="h-6 bg-gray-200 rounded-lg w-2/3 mx-auto animate-pulse" />
        </div>

        {/* Products Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="h-64 bg-gray-200 rounded-lg animate-pulse" />
              <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
