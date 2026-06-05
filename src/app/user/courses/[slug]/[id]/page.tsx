import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";

export default async function ChapterIdPage({
    params,
}: {
    params: Promise<{
        slug: string;
        id: string;
    }>;
}) {
    const { id } = await params;

    const chapter = await prisma.chapter.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            title: true,
            description: true,
            youtubeVideoId: true,
            order: true,
        },
    });

    if (!chapter) {
        notFound();
    }

    return (
        <div className="mx-auto max-w-5xl p-6">
            {/* Video */}
            {chapter.youtubeVideoId && (
                <div className="overflow-hidden rounded-xl border">
                    <iframe
                        className="aspect-video w-full"
                        src={`https://www.youtube.com/embed/${chapter.youtubeVideoId}`}
                        title={chapter.title}
                        allowFullScreen
                    />
                </div>
            )}

            {/* Content */}
            <div className="mt-6">
                <h1 className="text-3xl font-bold">
                    {chapter.title}
                </h1>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                    {chapter.description}
                </p>
            </div>
        </div>
    );
}