import { createSlice } from "@reduxjs/toolkit";

const SideBarSwitch = createSlice({
    name: "switchSideBar",
    initialState: {hidden:true},
    reducers: {
        toggleSideBar: (state) => {state.hidden = !state.hidden}
    }
})

export const { toggleSideBar } = SideBarSwitch.actions
export default SideBarSwitch.reducer