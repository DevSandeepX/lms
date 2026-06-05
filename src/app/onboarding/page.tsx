import { prisma } from '@/lib/db'
import { auth } from '@clerk/nextjs/server'
import { Loader2Icon } from 'lucide-react'
import { redirect } from 'next/navigation'
import React, { Suspense } from 'react'

export default function Onboarding() {

    return (
        <Suspense fallback={<div className='w-full min-h-screen flex items-center justify-center'>
            <div className='w-20 space-y-2'>
                <Loader2Icon className='animate-spin w-16' />
            </div>
        </div>}>
            <RedirectOnDashboard />
        </Suspense>
    )
}


async function RedirectOnDashboard() {
    const { userId } = await auth()

    if (userId == null) return redirect("/")

    async function onBoarding() {
        const user = await prisma.user.findUnique({
            where: {
                clerkId: userId
            },
            select: { role: true }
        })

        if (!user) return redirect("/")
        if (user.role === "USER") return redirect("/user/dashboard");
        if (user.role === "ADMIN") return redirect("/admin/dashboard");
        return null
    }

    await onBoarding()
}