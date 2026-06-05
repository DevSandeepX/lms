import { NAV_LINKS } from "@/assets";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-white">
                            LMS Platform
                        </h2>
                        <p className="mt-4 text-sm leading-6 text-slate-400">
                            Learn new skills, explore expert-led courses, and advance
                            your career with our modern learning platform.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">
                            Quick Links
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className=" transition">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}


                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">
                            Categories
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm">
                            <li>Web Development</li>
                            <li>Programming</li>
                            <li>Database</li>
                            <li>Cloud Computing</li>
                            <li>UI/UX Design</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">
                            Contact
                        </h3>

                        <div className="mt-4 space-y-3 text-sm">
                            <p>support@lms.com</p>
                            <p>+91 98765 43210</p>
                            <p>India</p>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>
                        © {new Date().getFullYear()} LMS Platform. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-white transition">
                            Privacy Policy
                        </Link>

                        <Link href="/terms" className="hover:text-white transition">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}