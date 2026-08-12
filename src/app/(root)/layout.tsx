"use client"

import Header from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { MobileNavigation } from "@/components/layout/mobile-nav"
import { TokenTabsHeader } from "@/components/layout/token-tabs-header"
import { usePathname } from "next/navigation"
import { useBreakpoint } from "@/hooks/use-breakpoint"
import { cn } from "@/utils"

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const pathname = usePathname()
	const { isMobile, width } = useBreakpoint()

	const isTokenPage = pathname.startsWith('/token/')
	const isHomePage = pathname === "/"

	// during initial load (width === 0), default to desktop behavior for padding
	const shouldHavePadding = !isTokenPage && !(width > 0 && isMobile && isHomePage)

	return (
		<div className="flex flex-col h-screen overflow-hidden">
			<Header />
			<TokenTabsHeader />

			{/* @dev: Bottom padding must clear the fixed bar below — 64px mobile nav, 48px desktop footer */}
			<main className="flex-1 overflow-hidden pb-16 lg:pb-12">
				{shouldHavePadding ? (
					<div className={cn(
						"h-full overflow-auto px-3 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5"
					)}>
						{children}
					</div>
				) : (
					children
				)}
			</main>

			<Footer />
			<MobileNavigation />
		</div>
	)
}
