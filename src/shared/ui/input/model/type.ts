import { InputHTMLAttributes } from 'react'

export type Props = InputHTMLAttributes<HTMLInputElement> & {
	type?: 'text' | 'password' | 'number'
	maxLength?: number
	title?: string
	error?: string
	classNames?: string
	prevLetter?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}