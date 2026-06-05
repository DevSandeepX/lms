import { BookOpen, ImageDown, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface CourseCardProps {
    id: string;
    title: string;
    slug: string;
    description: string | null;
    imageUrl: string | null;
    updatedAt: Date;
    teacherName: string;
    totalChapters: number;
    totalEnrollments: number;
}

export default function CourseCard({
    slug,
    title,
    description,
    imageUrl,
    updatedAt,
    teacherName,
    totalChapters,
    totalEnrollments,
}: CourseCardProps) {
    return (
        <div className="overflow-hidden border bg-white shadow-sm transition hover:shadow-lg">
            {/* Thumbnail */}
            <div className="relative h-56 w-full bg-muted">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center">
                        <ImageDown className="h-12 w-12 text-muted-foreground" />
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="line-clamp-1 text-lg font-semibold">
                    {title}
                </h3>

                <p className="mt-1 text-sm text-blue-600 font-medium">
                    By {teacherName}
                </p>

                <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
                    {description || "No description available"}
                </p>

                {/* Stats */}
                <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center">
                            <BookOpen className="h-5 w-5 text-blue-800" />
                        </div>
                        <span>{totalChapters} Chapters</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center">
                            <Users className="h-5 w-5" />
                        </div>

                        <span>{totalEnrollments} Students</span>
                    </div>
                </div>

                <div className="mt-4 text-xs text-muted-foreground">
                    Updated {new Date(updatedAt).toLocaleDateString()}
                </div>
                <Link href={`/courses/${slug}`}>
                    <Button className="w-full mt-5 bg-blue-700 hover:bg-blue-800 text-white">
                        Learn More
                    </Button>
                </Link>
            </div>
        </div>
    );
}