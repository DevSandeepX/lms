import { prisma } from '@/lib/db'
import React, { Suspense } from 'react'
import Image from "next/image";
import Pagination from '@/components/Pagination';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { CoursesCardSkeleton } from '@/components/CoursesCardSkeleton';
import { getEnrollments } from '@/features/enrollments/db';
import { ArrowRight, BookOpen, Calendar } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';


export default async function EnrollmentsPage({ searchParams }: {
    searchParams: Promise<{ page?: string, limit?: string }>
}) {

    const searchParam = await searchParams
    const page = Number(searchParam.page) || 1
    const limit = Number(searchParam.limit) || 6

    const { userId } = await auth()
    if (!userId) return redirect("/sign-up");

    const user = await prisma.user.findUnique({
        where: {
            clerkId: userId
        }
    })

    if (!user) return redirect("/sign-up");



    return (
        <div className='max-w-7xl mx-auto py-2'>
            <Suspense fallback={<CoursesCardSkeleton />}>
                <EnrollmentsList page={page} limit={limit} userId={user.id} />
            </Suspense>
        </div>
    )
}



async function EnrollmentsList({
    page,
    limit,
    userId
}: {
    page: number;
    limit: number;
    userId: string
}) {
    const { enrollments, totalPages } = await getEnrollments({ limit, page, userId });

    if (enrollments.length === 0) {
        return (
            <div className="flex h-40 items-center justify-center rounded-lg border">
                <p className="text-muted-foreground">
                    No enrollments found
                </p>
            </div>
        );
    }

    return (
        <div className='space-y-4'>
            <Pagination currentPage={page} limit={limit} totalPages={totalPages} />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {enrollments.map((enrollment) => (
                    <div
                        key={enrollment.id}
                        className="overflow-hidden rounded-xl border bg-card shadow-sm"
                    >
                        <div className="relative h-48 w-full">
                            <Image
                                src={
                                    enrollment.course.imageUrl ??
                                    "/placeholder-course.jpg"
                                }
                                alt={enrollment.course.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-3 p-4">
                            <h3 className="line-clamp-1 text-lg font-semibold">
                                {enrollment.course.title}
                            </h3>

                            <p className="line-clamp-2 text-sm text-muted-foreground">
                                {enrollment.course.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-2 mt-4">
                                <div className="flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-700">
                                    <BookOpen className="h-4 w-4" />
                                    {enrollment.course._count.chapters} Chapters
                                </div>

                                <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1.5 text-sm font-medium text-emerald-700">
                                    <Calendar className="h-4 w-4" />
                                    {new Date(
                                        enrollment.createdAt
                                    ).toLocaleDateString()}
                                </div>
                            </div>

                            <Link href={`/user/courses/${enrollment.course.slug}`}>
                                <Button className="w-full rounded bg-blue-700">
                                    Continue Learning
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


