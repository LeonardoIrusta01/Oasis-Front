import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type products = {
	name: string,
	price: number,
	image: string,
	description: string,
	discount: boolean,
	active: boolean,
	stock: boolean,
	idCategory: number
}

type apiProductsResponse = {
	status: string,
	payload: products[] | string
}

export const productsApi = createApi({
	reducerPath: 'products',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3001'
	}),
	endpoints: (builder) => ({
		getProducts: builder.query<apiProductsResponse, null>({
			query: () => '/api/products'
		}),
	}),
});

export const {useGetProductsQuery} = productsApi
