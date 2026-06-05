
import Hero from "@/components/Hero";
import FeaturesList from "@/components/Features";
import PopularCourses from "@/components/PopularCourses";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gray-50">
      <Hero />
      <FeaturesList />
      <PopularCourses />
    </main>
  );
}
