import { ReactNode } from 'react'

export type Props = {
	handleChecked?: (e: boolean) => void
	children: ReactNode
	error?: string
	className?: string
}