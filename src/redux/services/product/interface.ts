export interface IProduct {
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

export interface IApiProductsResponse {
	status: string;
	payload: IProduct[];
}

export interface IApiProductResponseById {
	status: string;
	payload: IProduct | null;
}

