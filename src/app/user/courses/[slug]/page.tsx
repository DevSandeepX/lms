import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

export default async function CourseSlugPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const course = await prisma.course.findUnique({
        where: { slug },
        select: {
            chapters: {
                select: { id: true },
                orderBy: { order: "asc" },
                take: 1,
            },
        },
    });

    const firstChapter = course?.chapters[0];

    if (firstChapter) {
        redirect(`/user/courses/${slug}/${firstChapter.id}`);
    }

    return (
        <div className="p-6">
            No chapters found.
        </div>
    );
}