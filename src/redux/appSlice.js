import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    showSuggesions: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setMenu: (state, action) => {
      state.isMenuOpen = action.payload;
    },

    setShowSuggestions: (state, action) => {
        state.showSuggestions= action.payload;
    },
  },
});

export const { toggleMenu, setMenu, setShowSuggestions } = appSlice.actions;
export default appSlice.reducer;
