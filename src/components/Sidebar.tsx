"use client";

import { USER_LINKS } from "@/assets";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="flex h-screen w-72 flex-col border-r bg-white">
            {/* Header */}
            <div className="flex items-center justify-between border-b px-5 py-4">
                <div>
                    <h2 className="font-bold text-lg">Student Panel</h2>
                    <p className="text-xs text-muted-foreground">
                        Learning Dashboard
                    </p>
                </div>

                <UserButton />
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-4">
                <div className="space-y-1">
                    {USER_LINKS.map((link) => {
                        const isActive =
                            pathname === link.href ||
                            pathname.startsWith(link.href + "/");

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={clsx(
                                    "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all",
                                    isActive
                                        ? "bg-blue-600 text-white shadow-md"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                )}
                            >

                                <span>{link.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Footer */}
            <div className="border-t p-4">
                <div className="rounded-xl bg-slate-50 p-4">
                    <h4 className="font-medium text-sm">
                        Keep Learning 🚀
                    </h4>

                    <p className="mt-1 text-xs text-muted-foreground">
                        Complete your courses and track your progress.
                    </p>
                </div>
            </div>
        </aside>
    );
}