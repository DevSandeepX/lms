import Sidebar from "@/components/Sidebar";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

export default function UserLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Mobile Header */}
            <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-white px-4 lg:hidden">
                <h1 className="font-semibold">Student Panel</h1>

                <Sheet>
                    <SheetTrigger render={<Button variant="ghost" size="icon">
                        <Menu className="h-5 w-5" />
                    </Button>} />

                    <SheetContent side="left" className="p-0 w-72">
                        <Sidebar />
                    </SheetContent>
                </Sheet>
            </header>

            <div className="flex">
                {/* Desktop Sidebar */}
                <aside className="hidden lg:block lg:w-72 lg:shrink-0">
                    <div className="sticky top-0 h-screen border-r bg-white">
                        <Sidebar />
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-x-hidden">
                    <div className="p-4 sm:p-6 lg:p-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}