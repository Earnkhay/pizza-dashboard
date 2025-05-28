import Link from "next/link"
import { PizzaIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { ThemeToggle } from "@/components/theme-toggle"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <Link
            href="/"
            className="flex items-center gap-2 px-2"
          >
            <PizzaIcon className="h-6 w-6" />
            <h2 className="text-lg font-semibold tracking-tight">
              Pizza Dashboard
            </h2>
          </Link>
          <div className="mt-8 space-y-8">
            <MainNav />
          </div>
        </div>
      </div>
      <div className="mt-auto border-t px-6 py-4 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <UserNav />
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}