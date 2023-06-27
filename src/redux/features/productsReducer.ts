import { createSlice } from "@reduxjs/toolkit";
import { useGetProductsQuery } from "../services/productsApi";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: []
    },
    reducers: {
        getProducts: (state: any, action) => {
            state.products = action.payload ? [...action.payload, ...(state?.products || [])] : action.payload
        },
        filterProducts: (state, action) => {
            state.products = action.payload
        }
    }
})

export const { getProducts, filterProducts } = productSlice.actions