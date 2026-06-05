import { prisma } from "@/lib/db";
import { BookOpen, PlayCircle } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default async function ViewCourseLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const course = await getCourse(slug);

    if (!course) {
        redirect("/user/enrollments");
    }

    return (
        <section className="flex min-h-screen bg-muted/30">
            {/* Sidebar */}
            <aside className="hidden lg:flex w-80 flex-col border-r bg-background">
                <div className="sticky top-0 z-10 border-b bg-background p-6">
                    <div className="flex items-center gap-2">
                        <div className="rounded-xl bg-blue-100 p-3">
                            <BookOpen className="h-6 w-6 text-blue-600" />
                        </div>

                        <div>
                            <h2 className="font-bold text-lg">
                                {course.title}
                            </h2>

                            <p className="text-sm text-muted-foreground">
                                {course.chapters.length} Chapters
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                    <div className="space-y-3">
                        {course.chapters.map((chapter, index) => (
                            <Link
                                key={chapter.id}
                                href={`/user/courses/${slug}/${chapter.id}`}
                                className="group flex items-center gap-3 rounded-xl border bg-card p-4 transition-all hover:border-blue-500 hover:bg-blue-50"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                                    {index + 1}
                                </div>

                                <div className="flex-1">
                                    <p className="line-clamp-1 text-sm font-medium">
                                        {chapter.title}
                                    </p>
                                </div>

                                <PlayCircle className="h-5 w-5 text-blue-600 opacity-70 transition group-hover:opacity-100" />
                            </Link>
                        ))}
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                {/* Mobile Header */}
                <div className="border-b bg-background p-4 lg:hidden">
                    <h1 className="font-bold text-lg">
                        {course.title}
                    </h1>

                    <p className="text-sm text-muted-foreground">
                        {course.chapters.length} Chapters
                    </p>

                    <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                        {course.chapters.map((chapter, index) => (
                            <Link
                                key={chapter.id}
                                href={`/user/courses/${slug}/${chapter.id}`}
                                className="flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm hover:bg-muted"
                            >
                                <PlayCircle className="h-4 w-4" />
                                {index + 1}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="mx-auto max-w-6xl p-4 md:p-6 lg:p-8">
                    {children}
                </div>
            </main>
        </section>
    );
}

async function getCourse(slug: string) {
    return prisma.course.findUnique({
        where: { slug },
        select: {
            title: true,
            chapters: {
                select: {
                    id: true,
                    title: true,
                    youtubeVideoId: true,
                    description: true,
                },
                orderBy: {
                    order: "asc",
                },
            },
        },
    });
}