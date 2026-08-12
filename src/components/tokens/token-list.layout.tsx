"use client"

import { memo, ReactNode } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/utils"

interface TokenListLayoutProps {
	title: string
	children: ReactNode
	className?: string
	headerClassName?: string
	scrollClassName?: string
	glowColor?: "blue" | "pink" | "gold"
	headerAction?: ReactNode
}

export const TokenListLayout = memo(function TokenListLayout({
	title,
	children,
	className,
	headerClassName,
	scrollClassName,
	glowColor = "blue",
	headerAction
}: TokenListLayoutProps) {
	// @dev: Accent maps to a status dot + label tint; the panel chrome stays neutral
	// so the token rows remain the brightest thing in the column.
	const accentStyles = {
		blue: { dot: "bg-blue-400 shadow-[0_0_8px_var(--color-blue-400)]", text: "text-blue-400" },
		pink: { dot: "bg-pink-400 shadow-[0_0_8px_var(--color-pink-400)]", text: "text-pink-400" },
		gold: { dot: "bg-amber-400 shadow-[0_0_8px_var(--color-amber-400)]", text: "text-amber-400" }
	}

	const accent = accentStyles[glowColor]

	return (
		<div className={cn("bg-card/30 border border-border rounded-xl flex flex-col min-h-0 overflow-hidden shadow-surface", className)}>
			<div className={cn("px-4 h-12 border-b border-border flex-shrink-0 flex items-center gap-3", headerClassName)}>
				<h2 className={cn(
					"flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] font-semibold",
					accent.text
				)}>
					<span className={cn("size-1.5 rounded-full flex-shrink-0", accent.dot)} />
					{title}
				</h2>
				{headerAction && (
					<div className="ml-auto flex items-center">
						{headerAction}
					</div>
				)}
			</div>
			<ScrollArea className={cn("flex-1 overflow-hidden", scrollClassName)}>
				<div>
					{children}
				</div>
			</ScrollArea>
		</div>
	)
})