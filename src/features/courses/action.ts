"use server"

import { insertCourseEnrollement } from "./db";

export async function enrolleCourseAction(userId: string, courseId: string) {
    if (!userId) return { message: "User Id is missing", success: false };
    if (!courseId) return { message: "Course Id is missing", success: false };

    try {
        const data = await insertCourseEnrollement(userId, courseId)

        return {
            message: "Enrollement success",
            data,
            success: true
        }
    } catch (e) {
        return {
            message: "Failed to enrolle course.",
            data: null,
            success: true
        }
    }
}