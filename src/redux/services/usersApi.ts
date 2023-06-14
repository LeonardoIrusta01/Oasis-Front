import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface users {
	lastName: string;
	firstName: string;
	email: string;
	image: string;
	cellphone: number;
}

interface apiUsersResponse {
	status: string;
	payload: users[] | string;
}

interface apiUserResponseById {
	status: string;
	payload: users;
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
	}),
});

export const { useGetUsersQuery } = usersApi;
export const { useGetUserByIdQuery } = usersApi;
