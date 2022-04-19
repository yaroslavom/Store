import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
	cart: [],
};

const productCartSlice = createSlice({
	name: 'productCart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const item = action.payload;
			const existItem = state.cart.find((x: any) => x._id === item._id);
			existItem
				? (state.cart = state.cart.map((x: any) => (x._id === existItem._id ? item : x)))
				: state.cart.push(item);
		},
		removeFromCart: (state, action) => {
			console.log(state, action);
			// import { PURGE } from "redux-persist";

			// extraReducers: (builder) => {
			//     builder.addCase(PURGE, (state) => {
			//         customEntityAdapter.removeAll(state);
			//     });
		},
	},
});

export const { addToCart, removeFromCart } = productCartSlice.actions;

export default productCartSlice.reducer;
