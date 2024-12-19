import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserType } from '@shared/types'

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://0267-2a02-8071-6282-a220-66a2-8fa2-c24e-5cd.ngrok-free.app/api',
		credentials: 'include',
	}),
	endpoints: (builder) => ({
		login: builder.mutation<UserType, { password: string; phone: string }>({
			query: (data) => ({
				url: '/login',
				method: 'POST',
				body: data,
			}),
		}),
		createUser: builder.mutation<UserType, { phone: string; password: string; }>({
			query: (data) => ({
				url: '/register',
				method: 'POST',
				body: data,
			}),
		}),
	}),
})

export const { useLoginMutation, useCreateUserMutation } = authApi
