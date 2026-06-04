import { CourseStatus, ChapterStatus, UserRole } from "@/generated/prisma/enums";
import { prisma } from "./db";



async function main() {
    const teacher = await prisma.user.upsert({
        where: {
            email: "admin@lms.com",
        },
        update: {},
        create: {
            clerkId: "teacher_seed_001",
            name: "Admin Teacher",
            email: "admin@lms.com",
            role: UserRole.ADMIN,
        },
    });

    const courses = [
        {
            title: "Complete HTML & CSS",
            slug: "complete-html-css",
            imageUrl: "/courses/html-css.jpg",
            description:
                "Learn HTML5, CSS3, Flexbox, Grid and responsive web design from scratch.",
        },
        {
            title: "JavaScript Mastery",
            slug: "javascript-mastery",
            imageUrl: "/courses/javascript.jpg",
            description:
                "Master modern JavaScript including ES6+, DOM, APIs and async programming.",
        },
        {
            title: "React.js Fundamentals",
            slug: "reactjs-fundamentals",
            imageUrl: "/courses/react.jpg",
            description:
                "Build modern web applications using React, Hooks and component architecture.",
        },
        {
            title: "Next.js Full Stack",
            slug: "nextjs-fullstack",
            imageUrl: "/courses/nextjs.jpg",
            description:
                "Learn App Router, Server Components, APIs and deployment in Next.js.",
        },
        {
            title: "Node.js & Express API",
            slug: "nodejs-express-api",
            imageUrl: "/courses/nodejs.jpg",
            description:
                "Build scalable backend applications and REST APIs using Node.js.",
        },
        {
            title: "MongoDB Database Course",
            slug: "mongodb-database-course",
            imageUrl: "/courses/mongodb.jpg",
            description:
                "Learn MongoDB schema design, aggregation, indexing and optimization.",
        },
        {
            title: "Prisma ORM Complete Guide",
            slug: "prisma-orm-complete-guide",
            imageUrl: "/courses/prisma.jpg",
            description:
                "Master Prisma ORM with PostgreSQL and modern database workflows.",
        },
        {
            title: "TypeScript for Developers",
            slug: "typescript-for-developers",
            imageUrl: "/courses/typescript.jpg",
            description:
                "Learn TypeScript fundamentals, generics, interfaces and advanced types.",
        },
        {
            title: "Tailwind CSS Masterclass",
            slug: "tailwind-css-masterclass",
            imageUrl: "/courses/tailwind.jpg",
            description:
                "Build beautiful responsive UIs quickly using Tailwind CSS.",
        },
        {
            title: "Full Stack LMS Project",
            slug: "full-stack-lms-project",
            imageUrl: "/courses/lms-project.jpg",
            description:
                "Build a complete LMS platform using Next.js, Prisma, Clerk and PostgreSQL.",
        },
    ];

    for (const course of courses) {
        await prisma.course.upsert({
            where: {
                slug: course.slug,
            },
            update: {},
            create: {
                ...course,
                status: CourseStatus.PUBLISHED,
                userId: teacher.id,

                chapters: {
                    create: [
                        {
                            title: "Introduction",
                            description: "Course overview and setup.",
                            order: 1,
                            status: ChapterStatus.PUBLISHED,
                        },
                        {
                            title: "Core Concepts",
                            description: "Learn the main concepts.",
                            order: 2,
                            status: ChapterStatus.PUBLISHED,
                        },
                        {
                            title: "Project Build",
                            description: "Apply concepts in a real project.",
                            order: 3,
                            status: ChapterStatus.PUBLISHED,
                        },
                    ],
                },
            },
        });
    }

    console.log("✅ Seed completed successfully");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });