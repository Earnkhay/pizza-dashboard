import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { MobileNav } from "@/components/mobile-nav";
import { Sidebar } from "@/components/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6 md:hidden">
        <MobileNav />
        <div className="flex-1"></div>
      </header>
      <div className="flex-1 items-start md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <aside className="fixed top-0 z-30 hidden h-screen border-r md:sticky md:block">
          <Sidebar />
        </aside>
        <main className="flex w-full flex-col p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}