import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchBarStateDispatch: 0
    },
    reducers: {
        searchBarStateDispatch: (state: any) => {
            state.searchBarStateDispatch += 1
        }
    }
})

export const { searchBarStateDispatch } = searchSlice.actions