export interface Iuser {
	lastName: string;
	firstName: string;
	email: string;
	image: string;
	cellphone: number;
}

export interface IpostResponse {
	id: string,
	user: Iuser
}

export interface IApiUsersResponse {
	status: string;
	payload: Iuser[] | string;
}