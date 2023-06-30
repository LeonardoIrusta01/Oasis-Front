import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IApiResponseCategories } from './inteface';


export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001',
    }),
    endpoints: (builder) => ({
        getCategories: builder.query<IApiResponseCategories, null>({
            query: () => "/api/categories"
        })
    }),
});

export const { useGetCategoriesQuery } = categoryApi;