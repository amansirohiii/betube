import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    cacheResults: {},
    searchQuery: "",
  },
  reducers: {
    setCacheResults: (state, action) => {
      state.cacheResults= {
        ...state.cacheResults,
        ...action.payload,
      };
    },
    setSearchQuery: (state, action)=>{
        state.searchQuery = action.payload;
    }
  },
});

export const { setCacheResults, setSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
