import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IApiUsersResponse, IpostResponse } from "./interface"

export const usersApi = createApi({
	reducerPath: 'usersApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3001',
	}),
	endpoints: (builder) => ({
		getUsers: builder.query<IApiUsersResponse, null>({
			query: () => '/api/user',
		}),
		update: builder.mutation<IpostResponse, {id: string; post: FormData}>({
			query: ({ id, post }) => ({
				url: `/api/user/${id}`,
				method: 'PATCH',
				body: post,
			}),
		}),
	}),
});

export const {
	useGetUsersQuery,
	useUpdateMutation,
} = usersApi;
