export interface Iuser {
	lastName?: string;
	firstName?: string;
	email?: string;
	image?: string;
	cellphone?: number;
	id?: number;
	admin?: boolean
}

export interface IpostResponse {
	id: number,
	user: Iuser,
	image: string,
}

export interface IApiUsersResponse {
	status: string;
	payload: Iuser[];
}

export interface IApiUserResponse {
	status: string;
	payload: Iuser;
}

export interface IpostUserResponse {
	status: string;
	payload: Iuser | string;
}