import type { ReactNode } from "react"
import { cn } from "@/utils"

const widths = {
	sm: "max-w-2xl",
	md: "max-w-4xl",
	lg: "max-w-6xl",
	xl: "max-w-7xl",
	full: "max-w-none",
} as const

interface PageContainerProps {
	children: ReactNode
	className?: string
	width?: keyof typeof widths
}

/**
 * @dev: Single source of truth for page width and vertical rhythm. The outer
 * route layout already supplies the horizontal gutter, so this only centres
 * content and spaces sections — no extra padding that would double up.
 */
export function PageContainer({ children, className, width = "xl" }: PageContainerProps) {
	return <div className={cn("mx-auto w-full", widths[width], className)}>{children}</div>
}

interface PageHeaderProps {
	title: string
	description?: string
	actions?: ReactNode
	className?: string
}

export function PageHeader({ title, description, actions, className }: PageHeaderProps) {
	return (
		<div className={cn("mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between", className)}>
			<div className="min-w-0 space-y-1">
				<h1 className="truncate font-mono text-xl font-bold uppercase tracking-[0.08em] text-foreground sm:text-2xl">
					{title}
				</h1>
				{description && <p className="text-sm text-muted-foreground">{description}</p>}
			</div>
			{actions && <div className="flex flex-shrink-0 flex-wrap items-center gap-2">{actions}</div>}
		</div>
	)
}
