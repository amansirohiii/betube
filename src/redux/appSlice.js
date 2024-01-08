import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toggleMenu: (state)=>{
            state.isMenuOpen =!state.isMenuOpen;
        },
        setMenu: (state,action)=>{
            state.isMenuOpen=action.payload;
        }

    }
})

export const {toggleMenu, setMenu}=appSlice.actions;
export default appSlice.reducer;