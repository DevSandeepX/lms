import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gray-50">
      <header className="w-full p-4 sm:px-6 md:px-8 border-b border-gray-200 sticky top-0 bg-white z-10">
        <Navbar />
      </header>
    </main>
  );
}
