import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface ApiResponseCategories {
    status: string
    payload: [{
        name: string,
        image: string
    }]
}

export interface Category {
    name: string
    image: string
}

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001',
    }),
    endpoints: (builder) => ({
        getCategories: builder.query<ApiResponseCategories, null>({
            query: () => "/api/categories"
        })
    }),
});

export const { useGetCategoriesQuery } = categoryApi;