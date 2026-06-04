import { features } from "@/assets";
import React from "react";

export default function FeaturesList() {
    return (
        <section className="w-full max-w-7xl mx-auto py-20 px-4 sm:px-6 md:px-8">
            <div className="text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                    What We Offer
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Explore our powerful learning platform designed to help students
                    learn, grow, and achieve their goals.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                    >
                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 mb-5">
                            <feature.icon className="w-7 h-7" />
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900">
                            {feature.title}
                        </h3>

                        <p className="text-gray-600 mt-3 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}