import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';

export const store = configureStore({
	reducer: productSlice,
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
