import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { status, IProduct } from '../interfaces';

export const getProducts = createAsyncThunk(
	'products/getProducts',
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await axios.get<IProduct[]>('/api/products/');
			return data;
		} catch (error: any) {
			return rejectWithValue(
				error.response.data.message ? error.response.data.message : error.message,
			);
		}
	},
);

type sliceState = {
	products: IProduct[] | any;
	status: status;
	error: any;
};

const initialState: sliceState = {
	products: [],
	status: 'idle',
	error: false,
};

const productsListSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProducts(state: sliceState, action: PayloadAction) {
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
		builder.addCase(getProducts.rejected, (state, action) => {
			state.error = action.payload;
			state.status = action.meta.requestStatus;
		});
	},
});

export const { addProducts } = productsListSlice.actions;

export default productsListSlice.reducer;
