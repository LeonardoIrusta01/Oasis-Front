import { LegacyRef } from 'react';

export interface IPopUpEditProps {
	setIsShown: any;
	productName: string
	productDescription: string
	productPrice: number
	productImage: string
	productId: number
	productStock: boolean
	productCategory: number,
}

export interface IDataForm {
	name: string;
	image: string
	price: number;
	description: string;
	stock: boolean | string
	idCategory: number,
  }