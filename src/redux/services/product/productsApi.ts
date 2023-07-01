import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct, IApiProductResponseById, IApiProductsResponse } from "./interface"


export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3001',
	}),
	endpoints: (builder) => ({
		getProducts: builder.query<IApiProductsResponse, string>({
			query: (query) => `/api/products?${query}`,
		}),
		getProductsById: builder.query<IApiProductResponseById, string>({
			query: (id) => `/api/products/${id}`,
		}),
	}),
});

export const { useGetProductsQuery, useGetProductsByIdQuery } = productsApi;
