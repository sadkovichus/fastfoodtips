import { AxiosError } from 'axios'

export const handleAxiosError = (error: unknown) => {
	const axiosError = error as AxiosError
	return axiosError.response?.data || 'Произошла ошибка'
}
