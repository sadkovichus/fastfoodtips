import { useCallback } from 'react'
import { useTokenMutation } from '@entities/auth/api/authApi'
import { setUser } from '@features/auth/authSlice'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'

export const useTokenVerification = () => {
	const [token, { isLoading }] = useTokenMutation()
	const dispatch = useAppDispatch()

	const verifyToken = useCallback(async (currentToken: string) => {
		try {
			const response = await token({ token: currentToken }).unwrap()
			dispatch(setUser(response))
		} catch (error) {
			console.error('Token verification failed:', error)
		}
	}, [token, dispatch])

	return { verifyToken, isLoading }
}