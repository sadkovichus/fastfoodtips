import CryptoJS from 'crypto-js'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from '@shared/types'

const initialState: UserType = {
	id: '',
	password: '',
	balance: 0,
	email: '',
	token: '',
	firstname: '',
	lastname: '',
	fathername: '',
	avatarurl: '',
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserType>) => {
			console.log(action.payload);
			localStorage.setItem('user', CryptoJS.AES.encrypt(JSON.stringify(action.payload), import.meta.env.VITE_USER_SECRET).toString())

			state.id = action.payload.id  || ''
			state.password = action.payload.password || ''
			state.balance = action.payload.balance || 0
			state.email = action.payload.email || ''
			state.token = action.payload.token || ''
			state.firstname = action.payload.firstname || ''
			state.lastname = action.payload.lastname || ''
			state.fathername = action.payload.fathername || ''
			state.avatarurl = action.payload.avatarurl || ''
		},
		logout: (state) => {
			localStorage.removeItem('user')
			state.id = ''
			state.password = ''
			state.balance = 0
			state.email = ''
			state.token = ''
			state.firstname = ''
			state.lastname = ''
			state.fathername = ''
			state.avatarurl = ''
		},
	},
})

export const { setUser, logout } = authSlice.actions
export default authSlice.reducer
