import CryptoJS from 'crypto-js'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from '@shared/types'

const initialState: UserType = {
	id: undefined,
	password: '',
	balance: 0,
	email: '',
	token: '',
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserType>) => {
			localStorage.setItem('user', CryptoJS.AES.encrypt(JSON.stringify(action.payload), import.meta.env.VITE_USER_SECRET).toString())

			state.id = action.payload.id
			state.password = action.payload.password
			state.balance = action.payload.balance
			state.email = action.payload.email
			state.token = action.payload.token
		},
		logout: (state) => {
			localStorage.removeItem('user')
			state.id = undefined
			state.password = ''
			state.balance = 0
			state.email = ''
			state.token = ''
		},
	},
})

export const { setUser, logout } = authSlice.actions
export default authSlice.reducer
