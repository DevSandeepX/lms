import CoursesGrid from "@/components/CourseGrid";
import { CoursesCardSkeleton } from "@/components/CoursesCardSkeleton";
import Pagination from "@/components/Pagination";
import { getCourses } from "@/features/courses/db";
import { Suspense } from "react";

export default async function CoursesPage({
    searchParams,
}: {
    searchParams: Promise<{
        page?: string;
        limit?: string;
    }>;
}) {
    const params = await searchParams;

    const page = Number(params.page ?? "1");
    const limit = Number(params.limit ?? "6");

    return (
        <section className="max-w-7xl mx-auto py-10 px-4 sm:px-6 md:px-8">
            <Suspense
                key={`${page}-${limit}`}
                fallback={<CoursesCardSkeleton />}
            >
                <CoursesContent page={page} limit={limit} />
            </Suspense>
        </section>
    );
}

async function CoursesContent({
    page,
    limit,
}: {
    page: number;
    limit: number;
}) {
    const { courses, totalPages } = await getCourses({
        page,
        limit,
    });

    return (
        <>
            <Pagination
                totalPages={totalPages}
                currentPage={page}
                limit={limit}
            />

            <div className="py-10">
                <CoursesGrid courses={courses} />
            </div>
        </>
    );
}