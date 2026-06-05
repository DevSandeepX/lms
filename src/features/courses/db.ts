import { prisma } from "@/lib/db";

export async function getCourses({
    page = 1,
    limit = 6,
}: {
    page?: number;
    limit?: number;
}) {
    const skip = (page - 1) * limit;

    const [courses, totalCourses] = await Promise.all([
        prisma.course.findMany({
            where: {
                status: "PUBLISHED",
                deletedAt: null,
            },
            include: {
                user: {
                    select: {
                        name: true,
                    },
                },
                _count: {
                    select: {
                        chapters: true,
                        enrollments: true,
                    },
                },
            },
            skip,
            take: limit,
            orderBy: {
                createdAt: "desc",
            },
        }),

        prisma.course.count({
            where: {
                status: "PUBLISHED",
                deletedAt: null,
            },
        }),
    ]);

    return {
        courses,
        totalPages: Math.ceil(totalCourses / limit),
        totalCourses,
    };
}

export async function insertCourseEnrollement(userId: string, courseId: string) {
   const enrollement =  await prisma.enrollment.create({
        data: {
            courseId,
            userId
        }
    })

    return enrollement
}