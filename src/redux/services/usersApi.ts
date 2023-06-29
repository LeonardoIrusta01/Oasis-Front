import { LoginForm } from '@/components/logIn';
import { Form } from './../../components/signUp/index';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import path from 'path';

interface users {
	lastName: string;
	firstName: string;
	email: string;
	image: string;
	cellphone: number;
}

interface IpostResponse {
	id: string,
	user: users
}

interface apiUsersResponse {
	status: string;
	payload: users[] | string;
}

interface apiUserResponseById {
	status: string;
	payload: users;
}

interface apiLoginResponse {
	status: string;
	payload: { sessionId: string; user: users };
}

export const usersApi = createApi({
	reducerPath: 'usersApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3001',
	}),
	endpoints: (builder) => ({
		getUsers: builder.query<apiUsersResponse, null>({
			query: () => '/api/user',
		}),
		getUserById: builder.query<apiUserResponseById, string>({
			query: (id) => `/api/user/${id}`,
		}),
		register: builder.mutation({
			query: (payload: Form) => ({
				url: '/api/auth/register',
				method: 'POST',
				body: payload,
				headers: { 'Content-type': 'application/json; charset=UTF-8' },
			}),
		}),
		login: builder.mutation({
			query: (payload: LoginForm) => ({
				url: '/api/auth/login',
				method: 'POST',
				body: payload,
				headers: { 'Content-type': 'application/json; charset=UTF-8' },
			}),
		}),
		update: builder.mutation<IpostResponse, {id: string; post: FormData}>({
			query: ({ id, post }) => ({
				url: `/api/user/${id}`,
				method: 'PATCH',
				body: post,
			}),
		}),
		logout: builder.query({
			query: () => '/api/auth/logout',
		}),
	}),
});

export const {
	useGetUsersQuery,
	useGetUserByIdQuery,
	useRegisterMutation,
	useLoginMutation,
	useLogoutQuery,
	useUpdateMutation,
} = usersApi;
