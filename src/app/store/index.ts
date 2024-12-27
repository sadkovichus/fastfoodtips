import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '@entities/auth/api/authApi'
import { authReducer } from '@features/'
import { payApi } from '@entities/pay/api/payApi'
import { settingsApi } from '@entities/settings/api/settingApi'


export const store = configureStore({
	reducer: {
		authReducer: authReducer,
		[authApi.reducerPath]: authApi.reducer,
		[payApi.reducerPath]: payApi.reducer,
		[settingsApi.reducerPath]: settingsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(authApi.middleware)
			.concat(payApi.middleware)
			.concat(settingsApi.middleware), // Добавляем middleware всех API

})

// Типизация
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch