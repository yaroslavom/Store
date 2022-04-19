import { combineReducers } from '@reduxjs/toolkit';
import productListSlice from './productsListSlice';
import productDetailsSlice from './productDetailsSlice';
import productCartSlice from './productCartSlice';

const rootReducer = combineReducers({
	productList: productListSlice,
	productDetails: productDetailsSlice,
	productCart: productCartSlice,
});

export default rootReducer;
