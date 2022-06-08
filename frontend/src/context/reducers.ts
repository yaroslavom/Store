import { combineReducers } from '@reduxjs/toolkit';
import productListSlice from './productsListSlice';
import productDetailsSlice from './productDetailsSlice';
import productCartSlice from './productCartSlice';
import userLoginSlice from './userSlice';

const rootReducer = combineReducers({
	productList: productListSlice,
	productDetails: productDetailsSlice,
	productCart: productCartSlice,
	userLogin: userLoginSlice,
});

export default rootReducer;
