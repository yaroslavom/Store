import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { status } from '../interfaces';

interface IPostLogin {
	email: string;
	password: string;
}

export const login = createAsyncThunk(
	'user/postLogin',
	async (loginData: IPostLogin, { rejectWithValue }) => {
		const { email, password } = loginData;
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const { data } = await axios.post(`/api/users/login`, { email, password }, config);
			return data;
		} catch (error: any) {
			return rejectWithValue(
				error.response.data.message ? error.response.data.message : error.message,
			);
		}
	},
);

const initialState: any = {
	userInfo: null,
	status: 'idle',
	error: false,
};

const userLoginSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		userLogout(state: any) {
			state.status = null;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(login.pending, (state, action) => {
			state.error = false;
			state.status = action.meta.requestStatus;
			state.product = action.payload;
		});
		builder.addCase(login.fulfilled, (state, action) => {
			state.status = action.meta.requestStatus;
			state.product = action.payload;
		});
		builder.addCase(login.rejected, (state, action) => {
			state.error = action.payload;
			state.status = action.meta.requestStatus;
		});
	},
});

export const { userLogout } = userLoginSlice.actions;

export default userLoginSlice.reducer;
