import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface product {
	id: number;
	name: string;
	price: number;
	image: string;
	description: string;
	discount: boolean;
	active: boolean;
	stock: boolean;
	Category: {
		id: number;
		name: string;
		image: string;
		createdAt: string;
		updatedAt: string;
	};
}

interface apiProductsResponse {
	status: string;
	payload: product[] | string;
}

interface apiProductResponseById {
	status: string;
	payload: product | null;
}

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3001',
	}),
	endpoints: (builder) => ({
		getProducts: builder.query<apiProductsResponse, null>({
			query: () => '/api/products',
		}),
		getProductsById: builder.query<apiProductResponseById, string>({
			query: (id) => `/api/products/${id}`,
		}),
	}),
});

export const { useGetProductsQuery, useGetProductsByIdQuery } = productsApi;
