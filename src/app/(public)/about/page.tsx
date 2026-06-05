import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
            <div className="w-full mb-4">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    About Us
                </span>
            </div>

            <section className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
                {/* Content */}
                <div className="flex-1 space-y-5 text-center lg:text-left">
                    <div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                            Empowering Learning.
                        </h2>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-700">
                            Inspiring Growth.
                        </h2>
                    </div>

                    <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0">
                        Our LMS is built to make education accessible, engaging, and
                        effective for everyone. We connect learners and educators through
                        technology and create meaningful learning experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                        <Link href="/courses">
                            <Button className="bg-blue-800 hover:bg-blue-900 w-full sm:w-auto">
                                Explore Courses
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>

                        <Button variant="outline" className="w-full sm:w-auto">
                            Join Now
                        </Button>
                    </div>
                </div>

                {/* Image */}
                <div className="relative w-[320px] h-70 rounded-xl">
                    <Image
                        src="/about.jpg"
                        alt="About"
                        fill
                        priority
                        className="object-cover rounded-xl"
                    />
                </div>
            </section>

            <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 py-20 bg-blue-100/5">
                {/* Content */}


                {/* Image */}
                <div className="relative w-[320px] h-70 rounded-xl">
                    <Image
                        src="/about.jpg"
                        alt="About"
                        fill
                        priority
                        className="object-cover rounded-xl"
                    />
                </div>
                <div className="flex-1 space-y-5 text-center lg:text-left">
                    <div className="w-full mb-4">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium uppercase">
                            Our Story
                        </span>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">
                            Education for everyone, everywhare.
                        </h2>

                    </div>

                    <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0">
                        We believe that quality education should be accessible to everyone, regardless of their background or location. Our journey started with a simple idea - to build a platform that empowers learners to achive their goals and helps educators to inspire and create impact
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0">
                        Today, we are proud to support thousands of learners and educators worldwide in their learning journey.
                    </p>

                </div>
            </section>
        </div>
    );
}