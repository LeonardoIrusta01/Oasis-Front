export interface ICategory {
    id: number;
    name: string,
    image: string
}
export interface IApiResponseCategories {
    status: string
    payload: ICategory[]
}
