import { createSlice } from "@reduxjs/toolkit";

const SideBarSwitch = createSlice({
    name: "switchSideBar",
    initialState: {hidden:true},
    reducers: {
        toggleSideBar: (state, action) => {state.hidden = action.payload}
    }
})

export const { toggleSideBar } = SideBarSwitch.actions
export default SideBarSwitch.reducer