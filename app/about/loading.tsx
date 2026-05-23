export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        {/* Hero Skeleton */}
        <div className="text-center space-y-4">
          <div className="h-12 bg-gray-200 rounded-lg w-3/4 mx-auto animate-pulse" />
          <div className="h-6 bg-gray-200 rounded-lg w-2/3 mx-auto animate-pulse" />
        </div>

        {/* Content Skeleton */}
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>

        {/* Image Skeleton */}
        <div className="h-96 bg-gray-200 rounded-lg animate-pulse" />
      </div>
    </div>
  )
}
