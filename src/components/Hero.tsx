import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="w-full py-16 md:py-24 bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

                    {/* Left Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white text-sm mb-4">
                            🚀 Start Learning Today
                        </span>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Leading Educational
                            Platform Available
                            Online
                        </h1>

                        <p className="text-gray-200 mt-5 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
                            Discover a world of knowledge with expert instructors,
                            practical courses, and real-world learning experiences.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6">
                                Get Started
                            </Button>

                            <Link href="/courses">
                                <Button
                                    variant="outline"
                                    className="border-white text-black hover:bg-white hover:text-black px-8 py-6"
                                >
                                    Browse Courses
                                </Button>
                            </Link>
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-10 text-white">
                            <div>
                                <h3 className="text-2xl font-bold">10+</h3>
                                <p className="text-sm text-gray-300">Courses</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold">500+</h3>
                                <p className="text-sm text-gray-300">Students</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold">95%</h3>
                                <p className="text-sm text-gray-300">Success Rate</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-1/2 hidden sm:flex justify-center">
                        <Image
                            src="/student.png"
                            alt="Student"
                            width={750}
                            height={750}
                            priority
                            className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-contain"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
