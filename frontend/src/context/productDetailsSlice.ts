import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { status, IProduct } from '../interfaces';

export const getProduct = createAsyncThunk(
	'product/getProduct',
	async (id: string, { rejectWithValue }) => {
		try {
			const { data } = await axios.get<IProduct>(`/api/products/${id}`);
			return data;
		} catch (error: any) {
			return rejectWithValue(
				error.response.data.message ? error.response.data.message : error.message,
			);
		}
	},
);

type sliceState = {
	product: IProduct | Record<string, never> | undefined;
	status: status;
	error: any;
};

const initialState: sliceState = {
	product: {},
	status: 'idle',
	error: false,
};

const productDetailsSlice = createSlice({
	name: 'productDetails',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getProduct.pending, (state, action) => {
			state.error = false;
			state.status = action.meta.requestStatus;
			state.product = action.payload;
		});
		builder.addCase(getProduct.fulfilled, (state, action) => {
			state.status = action.meta.requestStatus;
			state.product = action.payload;
		});
		builder.addCase(getProduct.rejected, (state, action) => {
			state.error = action.payload;
			state.status = action.meta.requestStatus;
		});
	},
});

export default productDetailsSlice.reducer;
