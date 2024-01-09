import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
    name: "videos",
    initialState: {
        popularVideos : [],
        searchVideos: []
    },
    reducers: {
        addPopularVideos: (state, action)=>{
            state.popularVideos= action.payload;
        },
        addSearchVideos: (state, action)=>{
            state.searchVideos= action.payload;
        },
        removeSearchVideos: (state)=>{
            state.searchVideos = [];
        }
    }
})

export const {addPopularVideos, addSearchVideos, removeSearchVideos}=videosSlice.actions;
export default videosSlice.reducer;