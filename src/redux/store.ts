import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './services/product/productsApi';
import { usersApi } from './services/user/usersApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import toggleSideBar from './features/sideBarSwitch';
import { productSlice } from './features/productsReducer';
import { categoryApi } from './services/category/categoryApi';
import { searchSlice } from './features/searchbar'

export const store = configureStore({
	reducer: {
		[productsApi.reducerPath]: productsApi.reducer,
		[usersApi.reducerPath]: usersApi.reducer,
		[categoryApi.reducerPath]: categoryApi.reducer,
		toggleSideBarReducer: toggleSideBar,
		productReducer: productSlice.reducer,
		searchBarStateDispatch: searchSlice.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productsApi.middleware, usersApi.middleware, categoryApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
