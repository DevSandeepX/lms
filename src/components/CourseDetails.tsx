"use client";

import Image from "next/image";
import {
    BookOpen,
    Users,
    PlayCircle,
    Calendar,
    CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";


import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { useState } from "react";

import { toast } from "react-hot-toast"
import { enrolleCourseAction } from "@/features/courses/action";



type CourseDetailsProps = {
    course: any;
    userId: string
};

export default function CourseDetails({
    course,
    userId
}: CourseDetailsProps) {

    const chapterCount = course.chapters.length;
    const enrollmentCount = course.enrollments.length;
    const videoCount = course.chapters.filter(
        (chapter: any) => chapter.youtubeVideoId
    ).length;

    const [loading, setLoading] = useState(false);


    async function enrolleCourse() {
        setLoading(true)
        try {
            const res = await enrolleCourseAction(userId, course.id)
            if (res.success) {
                toast.success(res.message)
            } else {
                toast.error(res.message)
            }
        } catch (err: any) {
            toast.error(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid lg:grid-cols-[1fr_350px] gap-8">

                {/* Left Side */}
                <div className="space-y-8">

                    {/* Hero */}
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                            {course.title}
                        </h1>

                        {course.description && (
                            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                                {course.description}
                            </p>
                        )}
                    </div>

                    {/* Course Banner */}
                    <div className="relative w-full aspect-video overflow-hidden rounded-2xl border">
                        <Image
                            src={course.imageUrl}
                            alt={course.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Learn Section */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                            What You'll Learn
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            {course.chapters.map((chapter: any) => (
                                <div
                                    key={chapter.id}
                                    className="flex items-start gap-3 rounded-xl border bg-card p-4"
                                >
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />

                                    <span className="text-sm md:text-base">
                                        {chapter.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Sidebar */}
                <div className="lg:sticky lg:top-24 h-fit">
                    <Card className="overflow-hidden shadow-lg">
                        <CardContent className="p-6 space-y-6">

                            <h2 className="text-2xl font-semibold">
                                Course Details
                            </h2>

                            {/* Stats */}
                            <div className="grid gap-4">

                                <div className="flex items-center justify-between border rounded-xl p-4">
                                    <div className="flex items-center gap-3">
                                        <Users className="h-5 w-5" />
                                        <span>Students</span>
                                    </div>

                                    <span className="font-bold">
                                        {enrollmentCount}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between border rounded-xl p-4">
                                    <div className="flex items-center gap-3">
                                        <BookOpen className="h-5 w-5" />
                                        <span>Lessons</span>
                                    </div>

                                    <span className="font-bold">
                                        {chapterCount}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between border rounded-xl p-4">
                                    <div className="flex items-center gap-3">
                                        <PlayCircle className="h-5 w-5" />
                                        <span>Videos</span>
                                    </div>

                                    <span className="font-bold">
                                        {videoCount}
                                    </span>
                                </div>
                            </div>

                            <Button
                                size="lg"
                                className="w-full bg-blue-800"
                                onClick={enrolleCourse}
                                disabled={loading}

                            >
                                {loading ? "Processing" : "Enroll Now"}
                            </Button>

                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}