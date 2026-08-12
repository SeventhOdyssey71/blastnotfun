"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { navigationItems } from "@/constants/navigation"
import { cn } from "@/utils"
import { useCustomNavigation } from "@/hooks/use-custom-navigation"

export function MobileNavigation() {
	const pathname = usePathname()

	const { hideMainNav } = useCustomNavigation()
	if (hideMainNav) {
		return null
	}

	return (
		<div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-t border-border pb-[env(safe-area-inset-bottom)]">
			<nav className="flex justify-evenly items-center w-full h-16 px-2">
				{navigationItems.filter(item => item.label !== "TOOLS").map((item) => {
					const isActive = pathname === item.href
					const Icon = item.icon

					return (
						<Link
							key={item.href}
							href={item.href}
							aria-current={isActive ? "page" : undefined}
							className="group relative flex flex-1 flex-col justify-center items-center gap-1.5 py-2 min-w-0"
						>
							{/* @dev: Active indicator rides the top edge of the bar */}
							<span
								className={cn(
									"absolute -top-px h-0.5 w-8 rounded-full transition-opacity",
									isActive ? "bg-destructive opacity-100" : "opacity-0"
								)}
							/>
							<Icon
								className={cn(
									"h-5 w-5 transition-colors",
									isActive
										? "text-foreground"
										: "text-muted-foreground group-active:scale-95"
								)}
							/>
							<span
								className={cn(
									"text-[10px] font-mono uppercase tracking-[0.08em] transition-colors",
									isActive
										? "text-foreground font-semibold"
										: "text-muted-foreground"
								)}
							>
								{item.label}
							</span>
						</Link>
					)
				})}
			</nav>
		</div>
	)
}