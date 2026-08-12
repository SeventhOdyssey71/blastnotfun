"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "../ui/logo"
import { UserDropdown } from "../user/user-dropdown"
import { TradeTicker } from "./trade-ticker"
import { navigationItems } from "@/constants/navigation"
import { cn } from "@/utils"
import { useMounted } from "@/hooks/use-mounted"

export default function Header() {
	const pathname = usePathname()
	const mounted = useMounted()

	return (
		<header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
			<div className="h-8 bg-card/40 border-b border-border/50">
				<TradeTicker />
			</div>

			<div className="h-14 px-3 sm:px-5 lg:px-6 flex items-center gap-4 lg:gap-8">
				<Link href="/" className="group flex items-center gap-2.5 shrink-0">
					<Logo className="size-7 text-foreground group-hover:text-destructive transition-colors duration-200" />
					<span className="hidden sm:inline-block font-hegarty tracking-wider text-lg leading-none text-foreground group-hover:text-destructive transition-colors duration-200">
						BLAST.FUN
					</span>
				</Link>

				<nav className="hidden lg:flex items-center gap-1">
					{navigationItems.map((item) => {
						const Icon = item.icon
						const isActive = mounted && pathname === item.href
						return (
							<Link
								key={item.href}
								href={item.href}
								aria-current={isActive ? "page" : undefined}
								className={cn(
									"flex items-center gap-2 px-3 h-9 text-[11px] font-mono font-semibold uppercase tracking-[0.08em] rounded-md transition-colors",
									isActive
										? "text-foreground bg-destructive/10 ring-1 ring-inset ring-destructive/30"
										: "text-muted-foreground hover:text-foreground hover:bg-accent/60"
								)}
							>
								<Icon className="size-3.5" />
								<span className="hidden xl:inline">{item.label}</span>
							</Link>
						)
					})}
				</nav>

				<div className="flex-1" />

				<div className="flex-shrink-0 flex items-center gap-2">
					<UserDropdown />
				</div>
			</div>
		</header>
	)
}
