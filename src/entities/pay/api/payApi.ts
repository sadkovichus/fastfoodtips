import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserType } from '@shared/types'

export const payApi = createApi({
	reducerPath: 'payApi',
	baseQuery: fetchBaseQuery({
		baseUrl: '/api/',
		credentials: 'include',
		prepareHeaders: (headers) => {
			headers.set('Content-Type', 'application/json')
			return headers
		},
	}),
	endpoints: (builder) => ({
		createPay: builder.mutation<UserType, { amount: string; email: string }>({
			query: (data) => ({
				url: '/payments/create-payment',
				method: 'POST',
				body: JSON.stringify(data),
			})
		}),
	}),
})

export const { useCreatePayMutation} = payApi
