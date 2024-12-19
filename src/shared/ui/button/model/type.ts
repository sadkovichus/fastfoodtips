export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode
	className?: string
	param?: boolean
	navigateTo?: string
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}