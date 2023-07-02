export interface ICategory{
    name: string,
    image: string
}
export interface IApiResponseCategories {
    status: string
    payload: ICategory[]
}
