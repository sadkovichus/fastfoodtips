import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '@entities/auth/api/authApi'
import { authReducer } from '@features/'
import { payApi } from '@entities/pay/api/payApi'

export const store = configureStore({
	reducer: {
		authReducer: authReducer,
		[authApi.reducerPath]: authApi.reducer,
		[payApi.reducerPath]: payApi.reducer
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(authApi.middleware),
})

// Типизация
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch