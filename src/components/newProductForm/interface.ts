export interface INewProductForm {
    name: string;
    price: number;
    description: string;
    stock: boolean | string;
    active: boolean | string;
    idCategory: number;
    image?: string
}