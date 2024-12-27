import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
		createPay: builder.mutation<{ confirmationUrl: string }, { amount: string; userId: string }>({
			query: (data) => ({
				url: '/payments/create-payment',
				method: 'POST',
				body: JSON.stringify(data),
			})
		}),
	}),
})

export const { useCreatePayMutation } = payApi
