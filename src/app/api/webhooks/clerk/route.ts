import { Webhook } from "svix";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { WebhookEvent } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {
        throw new Error("Missing CLERK_WEBHOOK_SECRET");
    }

    const payload = await req.text();
    const headerPayload = await headers();

    const svixHeaders = {
        "svix-id": headerPayload.get("svix-id")!,
        "svix-timestamp": headerPayload.get("svix-timestamp")!,
        "svix-signature": headerPayload.get("svix-signature")!,
    };

    try {
        const wh = new Webhook(WEBHOOK_SECRET);

        const evt = wh.verify(payload, svixHeaders) as WebhookEvent;

        const eventType = evt.type;




        switch (eventType) {

            case "user.created":
            case "user.updated":
                const name =
                    `${evt.data.first_name ?? ""} ${evt.data.last_name ?? ""}`.trim() ||
                    "Unknown User";

                const email = evt.data.email_addresses[0]?.email_address;

                if (!email) {
                    throw new Error("Email is required");
                }
                await prisma.user.upsert({
                    where: {
                        clerkId: evt.data.id,
                    },
                    update: {
                        name,
                        email,
                        avatarUrl: evt.data.image_url || null,
                    },
                    create: {
                        clerkId: evt.data.id,
                        name,
                        email,
                        role: "USER",
                        avatarUrl: evt.data.image_url || null,
                    },
                });
                break;

            case "user.deleted":
                await prisma.user.deleteMany({
                    where: {
                        clerkId: evt.data.id,
                    },
                });
                break;
        }

        return NextResponse.json(
            { success: true, message: "Webhook received" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Webhook verification failed:", error);

        return NextResponse.json(
            { success: false, message: "Invalid signature" },
            { status: 400 }
        );
    }
}