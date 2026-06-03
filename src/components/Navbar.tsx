"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Show, UserButton } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

import { NAV_LINKS, images } from "@/assets"

export default function Navbar() {
    return (
        <nav className="w-full bg-white  max-w-7xl mx-auto">
            <div className="mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="shrink-0">
                    <Image
                        src={images.logo}
                        alt="Logo"
                        className="w-40 md:w-52 lg:w-64"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop Auth */}
                <div className="hidden lg:flex items-center gap-3">
                    <Show when="signed-out">
                        <>
                            <Button variant="outline">
                                <Link href="/sign-in">
                                    Sign In
                                </Link>
                            </Button>

                            <Button

                                className="bg-blue-600 hover:bg-blue-700"
                            >
                                <Link href="/sign-up">
                                    Sign Up
                                </Link>
                            </Button>
                        </>
                    </Show>

                    <Show when="signed-in">
                        <>
                            <Button variant="outline">
                                <Link href="/dashboard">
                                    Dashboard
                                </Link>
                            </Button>

                            <UserButton />
                        </>
                    </Show>
                </div>

                {/* Mobile Menu */}
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-56 px-4">
                            <div className="mt-16 flex flex-col gap-6">
                                {NAV_LINKS.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-base font-medium border p-2 rounded"
                                    >
                                        {link.label}
                                    </Link>
                                ))}

                                <div className="border-t pt-6 flex flex-col gap-3">
                                    <Show when="signed-out">
                                        <>
                                            <Button
                                                variant="outline"

                                                className="w-full"
                                            >
                                                <Link href="/sign-in">
                                                    Sign In
                                                </Link>
                                            </Button>

                                            <Button

                                                className="w-full bg-blue-600 hover:bg-blue-700"
                                            >
                                                <Link href="/sign-up">
                                                    Sign Up
                                                </Link>
                                            </Button>
                                        </>
                                    </Show>

                                    <Show when="signed-in">
                                        <div className="flex flex-col gap-3">
                                            <Button
                                                variant="outline"

                                                className="w-full"
                                            >
                                                <Link href="/dashboard">
                                                    Dashboard
                                                </Link>
                                            </Button>

                                            <div className="flex justify-center">
                                                <UserButton />
                                            </div>
                                        </div>
                                    </Show>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}