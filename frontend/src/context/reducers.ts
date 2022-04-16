import { combineReducers } from '@reduxjs/toolkit';
import productListSlice from './productsListSlice';
import productDetailsSlice from './productDetailsSlice';

const rootReducer = combineReducers({
	productList: productListSlice,
	productDetails: productDetailsSlice,
});

export default rootReducer;
