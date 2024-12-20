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
			localStorage.setItem('user', JSON.stringify(action.payload))

			state.id = action.payload.id
			state.password = action.payload.password
			state.balance = action.payload.balance
			state.email = action.payload.email
			state.token = action.payload.token
		},
		logout: (state) => {
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
