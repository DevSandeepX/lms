import { Suspense } from "react";
import CoursesGrid from "./CourseGrid";
import { CoursesCardSkeleton } from "./CoursesCardSkeleton";
import { getCourses } from "@/features/courses/db";

export default function PopularCourses() {
    return (
        <section className="w-full max-w-7xl mx-auto py-20 px-4 sm:px-6 md:px-8">
            <Suspense fallback={<CoursesCardSkeleton />}>
                <CourseList />
            </Suspense>
        </section>
    );
}

async function CourseList() {
    const { courses } = await getCourses({ limit: 3 })

    return (
        <>
            <div className="text-center mb-14">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                    Our Popular Courses
                </h2>

                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Discover our most popular courses designed to help you build
                    in-demand skills, advance your career, and achieve your learning
                    goals.
                </p>
            </div>
            <CoursesGrid courses={courses} />
        </>
    );
}

