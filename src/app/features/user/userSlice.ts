import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthType } from '../../../types'

const initialState = {
	user: null,
}
const userSlice = createSlice({
	name: 'user',
	initialState,

	reducers: {
		setLogInState: (
			state: { user: AuthType | null },
			action: PayloadAction<AuthType>,
		) => {
			// setUser(action.payload);
			state.user = action.payload
		},

		setLogOutState: (
			state: { user: AuthType | null },
			action: PayloadAction,
		) => {
			// setUser(null);
			state.user = null
		},
	},
})

export const { setLogInState, setLogOutState } = userSlice.actions

export const selectUser = (state: { user: { user: AuthType | null } }) =>
	state.user.user

export default userSlice.reducer
