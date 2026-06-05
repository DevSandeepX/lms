// app/(user)/courses/[slug]/page.tsx

import CourseDetails from "@/components/CourseDetails";
import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";

export default async function CoursePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;


    const course = await prisma.course.findUnique({
        where: {
            slug,
            status: "PUBLISHED",
        },
        include: {
            user: true,
            chapters: {
                where: {
                    status: "PUBLISHED",
                },
                orderBy: {
                    order: "asc",
                },
            },
            enrollments: true,
        },
    });

    if (!course) return notFound();

    const { userId } = await auth()
    if (!userId) return redirect("/")
    const user = await prisma.user.findUnique({
        where: {
            clerkId: userId
        }
    })

    if (!user) return redirect("/sign-up")


    return <CourseDetails
        course={course}
        userId={user.id}
    />;
}