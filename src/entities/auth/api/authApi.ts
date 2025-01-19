import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserType } from '@shared/types'

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({
		baseUrl: '/api/',
		credentials: 'include',
		prepareHeaders: (headers) => {
			headers.set('Content-Type', 'application/json')
			return headers
		},
	}),
	endpoints: (builder) => ({
		login: builder.mutation<UserType, { password: string; email: string }>({
			query: (data) => ({
				url: '/auth/login',
				method: 'POST',
				body: data,
			}),
		}),
		token: builder.mutation<UserType, { token: string }>({
			query: (data) => ({
				url: '/token/auth-token',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${data.token}`,
				},
			}),
		}),
		createUser: builder.mutation<UserType, { email: string; password: string; }>({
			query: (data) => ({
				url: '/auth/register',
				method: 'POST',
				body: JSON.stringify(data),
			}),
		}),
		verifyCode: builder.mutation<{message: string} | {auth: boolean}, { code: string }>({
			query: (data) => ({
				url: '/verify/verify-code',
				method: 'POST',
				body: JSON.stringify(data),
			})
		}),
		getUserById: builder.mutation<{message: string} | UserType, { id: string }>({
			query: (data) => ({
				url: '/user/get-user',
				method: 'GET',
				body: data,
			})
		}),
	}),
})

export const { useLoginMutation, useCreateUserMutation, useVerifyCodeMutation, useTokenMutation, useGetUserByIdMutation } = authApi
