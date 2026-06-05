import { prisma } from "@/lib/db";

export async function getEnrollments({
    userId,
    limit = 6,
    page = 1,
}: {
    userId: string;
    limit?: number;
    page?: number;
}) {
    const [enrollments, totalCount] = await Promise.all([
        prisma.enrollment.findMany({
            where: {
                userId,
            },
            skip: (page - 1) * limit,
            take: limit,
            include: {
                course: {
                    select: {
                        id: true,
                        title: true,
                        slug:true,
                        description: true,
                        imageUrl: true,
                        createdAt: true,
                        _count: {
                            select: {
                                chapters: true,
                            },
                        },
                    },
                },
            },
        }),

        prisma.enrollment.count({
            where: {
                userId,
            },
        }),
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    return {
        enrollments,
        totalPages,
    };
}