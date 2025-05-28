"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, PizzaIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  const links = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <Home className="h-5 w-5" />,
    },
    {
      name: "Orders",
      href: "/dashboard/orders",
      icon: <PizzaIcon className="h-5 w-5" />,
    },
  ]

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <TooltipProvider delayDuration={0}>
        {links.map((link) => (
          <Tooltip key={link.href}>
            <TooltipTrigger asChild>
              <Button
                variant={pathname === link.href ? "default" : "ghost"}
                className={cn(
                  "h-9 w-9 p-0",
                  pathname === link.href
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                asChild
              >
                <Link href={link.href}>{link.icon}</Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </nav>
  )
}