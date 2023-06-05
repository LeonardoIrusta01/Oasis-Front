import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './servicies/productsApi';
import { usersApi } from './servicies/usersApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
	reducer: {
		[productsApi.reducerPath]: productsApi.reducer,
		[usersApi.reducerPath]: usersApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productsApi.middleware, usersApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
