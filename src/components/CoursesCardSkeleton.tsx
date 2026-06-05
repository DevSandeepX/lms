export function CoursesCardSkeleton() {
    return (
        <>
            <div className="text-center mb-14">
                <div className="h-10 w-64 bg-gray-200 rounded mx-auto animate-pulse" />
                <div className="h-4 w-96 max-w-full bg-gray-200 rounded mx-auto mt-4 animate-pulse" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(3)].map((_, index) => (
                    <div
                        key={index}
                        className="bg-white border rounded-xl overflow-hidden shadow-sm"
                    >
                        <div className="h-48 bg-gray-200 animate-pulse" />
                        <div className="p-4 space-y-3">
                            <div className="h-6 bg-gray-200 rounded animate-pulse" />
                            <div className="h-4 bg-gray-200 rounded animate-pulse" />
                            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
                            <div className="h-10 bg-gray-200 rounded animate-pulse mt-4" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}