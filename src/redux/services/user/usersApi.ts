import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IApiUsersResponse, IpostResponse, Iuser, IpostUserResponse, IApiUserResponse } from './interface';

export const usersApi = createApi({
	reducerPath: 'usersApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3001',
	}),
	endpoints: (builder) => ({
		getUsers: builder.query<IApiUsersResponse, null>({
			query: () => '/api/user',
		}),
		updateUsers: builder.mutation<
			IpostResponse,
			{ id: number; post: Iuser }
		>({
			query: ({ id, post }) => ({
				url: `/api/user/${id}`,
				method: 'PUT',
				body: post,
				headers: { 'Content-type': 'application/json; charset=UTF-8' },
			}),
		}),
		getUserbyEmail: builder.query<IApiUserResponse, string | undefined>({
			query: (email) => `/api/user?email=${email}`,
		}),
		postUser: builder.mutation<IpostUserResponse, Iuser>({
			query: (post) => ({
					url: '/api/user',
					method: 'POST',
					body: post,
					headers: { 'Content-type': 'application/json; charset=UTF-8' },
			}),
		}),
	}),
});

export const {
	useGetUsersQuery,
	usePostUserMutation,
	useUpdateUsersMutation,
	useGetUserbyEmailQuery,
} = usersApi;
