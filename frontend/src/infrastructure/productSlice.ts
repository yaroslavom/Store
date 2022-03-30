import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk(
	'products/getProducts',
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await axios.get('/api/products/');
			return data;
		} catch (error: any) {
			return rejectWithValue(
				error.response.data.message ? error.response.data.message : error.message,
			);
		}
	},
);

export interface IProducts {
	products: any;
	status: null | string;
	error: any;
}

const initialState: IProducts = {
	products: [],
	status: null,
	error: null,
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProducts(state: IProducts, action: PayloadAction) {
			state.products.push(action.payload);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getProducts.pending, (state, action) => {
			state.error = false;
			state.status = action.meta.requestStatus;
		});
		builder.addCase(getProducts.fulfilled, (state, action) => {
			state.products = action.payload;
			state.status = action.meta.requestStatus;
		});
		builder.addCase(getProducts.rejected, (state, action: any) => {
			// console.log(action.payload, 'action.payload')
			// console.log(action.error, 'action.error')
			state.error = action.payload;
			state.status = action.meta.requestStatus;
		});
	},
});

export const { addProducts } = productsSlice.actions;

export const selectProducts = (state: IProducts) => state;

export default productsSlice.reducer;
