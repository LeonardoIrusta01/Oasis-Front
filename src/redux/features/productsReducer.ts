import { createSlice } from "@reduxjs/toolkit";
import { useGetProductsQuery } from "../services/product/productsApi";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: []
    },
    reducers: {
        getProducts: (state, action) => {
            state.products = action.payload
        },
        filterProducts: (state, action) => {
            state.products = action.payload
        }
    }
})

export const { getProducts, filterProducts } = productSlice.actions