import CourseCard from "@/components/CourseCard";

interface CoursesGridProps {
    courses: any[];
}

export default function CoursesGrid({
    courses,
}: CoursesGridProps) {
    if (courses.length === 0) {
        return (
            <div className="text-center text-xl font-medium text-muted-foreground">
                No courses available.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
                <CourseCard
                    key={course.id}
                    slug={course.slug}
                    id={course.id}
                    title={course.title}
                    description={course.description}
                    imageUrl={course.imageUrl}
                    updatedAt={course.updatedAt}
                    teacherName={course.user?.name || "Unknown Teacher"}
                    totalChapters={course._count.chapters}
                    totalEnrollments={course._count.enrollments}
                />
            ))}
        </div>
    );
}