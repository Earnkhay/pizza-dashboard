"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Menu, PizzaIcon, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { UserNav } from "./user-nav"
import { ThemeToggle } from "./theme-toggle"

export function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 flex flex-col">
        <div className="px-7">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <PizzaIcon className="h-6 w-6" />
            <span className="font-bold">Pizza Dashboard</span>
          </Link>
        </div>
        <ScrollArea className="my-4 flex-1">
          <div className="flex flex-col gap-2 px-7">
            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-2 py-2",
                pathname === "/dashboard" ? "text-primary font-medium" : "text-muted-foreground"
              )}
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/orders"
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-2 py-2",
                pathname === "/dashboard/orders" ? "text-primary font-medium" : "text-muted-foreground"
              )}
            >
              <PizzaIcon className="h-5 w-5" />
              Orders
            </Link>
          </div>
        </ScrollArea>
        <div className="mt-auto border-t px-7 py-4 flex justify-between">
          <UserNav />
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  )
}