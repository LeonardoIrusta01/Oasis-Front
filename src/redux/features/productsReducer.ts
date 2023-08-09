import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        currentPage: 1
    },
    reducers: {
        getProducts: (state, action) => {
            state.products = action.payload.product ? [...action.payload.product, ...(state?.products || [])] : action?.payload?.product
            state.currentPage = action.payload.page
        },
        filterProducts: (state, action) => {
            state.products = action.payload
        }
    }
})

export const { getProducts, filterProducts } = productSlice.actions