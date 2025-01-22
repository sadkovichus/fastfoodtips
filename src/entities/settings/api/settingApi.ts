import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserType } from '@shared/types'

export const settingsApi = createApi({
	reducerPath: 'settingsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: '/api/',
		credentials: 'include',
		prepareHeaders: (headers) => {
			headers.set('Content-Type', 'application/json')
			return headers
		},
	}),
	endpoints: (builder) => ({
		changeSettings: builder.mutation<{ message: string }, { firstname: string; lastname: string; fathername: string }>({
			query: (data) => ({
				url: '/user/change-userdata',
				method: 'PATCH',
				body: JSON.stringify(data),
			})
		}),
		changePassword: builder.mutation<UserType, { oldPassword: string; newPassword: string; userId: string }>({
			query: (data) => ({
				url: '/user/change-userpassword',
				method: 'PATCH',
				body: JSON.stringify(data),
			})
		}),
		uploadAvatar: builder.mutation<{ message: string; url: string } | {message: string}, {avatar: string; id: string}>({
			query: (data) => ({
				url: '/uploads/upload-avatar',
				method: 'PATCH',
				body: JSON.stringify(data),
			})
		}),
	}),
})

export const { useChangeSettingsMutation, useChangePasswordMutation, useUploadAvatarMutation } = settingsApi
