import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk('products/getProducts', async () => {
	const response = await axios.get('/api/products/');
	return response.data;
});

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
		builder.addCase(getProducts.fulfilled, (state, { payload }) => {
			state.products = payload;
		});
		builder.addCase(getProducts.rejected, (state, action) => {
			if (action.payload) {
				state.error = action.payload;
			} else {
				state.error = action.error.message;
			}
		});
	},
});

export const { addProducts } = productsSlice.actions;

export const selectProducts = (state: IProducts) => state.products;

export default productsSlice.reducer;
