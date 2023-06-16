import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './services/productsApi';
import { usersApi } from './services/usersApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import toggleSideBar from './features/sideBarSwitch';
import { productSlice } from './features/productsReducer';
import { categoryApi } from './services/categoryApi';

export const store = configureStore({
	reducer: {
		[productsApi.reducerPath]: productsApi.reducer,
		[usersApi.reducerPath]: usersApi.reducer,
		[categoryApi.reducerPath]: categoryApi.reducer,
		toggleSideBarReducer: toggleSideBar,
		productReducer: productSlice.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productsApi.middleware, usersApi.middleware, categoryApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
