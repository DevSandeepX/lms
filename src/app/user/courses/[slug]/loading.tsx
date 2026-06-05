import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <section className="flex min-h-screen bg-muted/30">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex w-80 flex-col border-r bg-background">
                <div className="border-b p-6">
                    <div className="flex items-center gap-3">
                        <Skeleton className="h-12 w-12 rounded-xl" />

                        <div className="space-y-2">
                            <Skeleton className="h-5 w-40" />
                            <Skeleton className="h-4 w-24" />
                        </div>
                    </div>
                </div>

                <div className="p-4 space-y-3">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 rounded-xl border p-4"
                        >
                            <Skeleton className="h-8 w-8 rounded-full" />

                            <div className="flex-1 space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-3 w-2/3" />
                            </div>
                        </div>
                    ))}
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                <div className="space-y-4">
                    <Skeleton className="h-10 w-1/2" />
                    <Skeleton className="h-72 w-full rounded-xl" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/6" />
                </div>
            </main>
        </section>
    );
}