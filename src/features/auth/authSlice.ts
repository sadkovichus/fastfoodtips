import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from '@shared/types'

const initialState: UserType = {
	id: undefined,
	password: '',
	balance: 0,
	phone: '',
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserType>) => {
			state.id = action.payload.id
			state.password = action.payload.password
			state.balance = action.payload.balance
			state.phone = action.payload.phone
		},
		logout: (state) => {
			state.id = undefined
			state.password = ''
			state.balance = 0
			state.phone = ''
		},
	},
})

export const { setUser, logout } = authSlice.actions
export default authSlice.reducer
