import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
    name: "videos",
    initialState: {
        popularVideos : []
    },
    reducers: {
        addPopularVideos: (state, action)=>{
            state.popularVideos= [...state.popularVideos, ...action.payload]
        }
    }
})

export const {addPopularVideos}=videosSlice.actions;
export default videosSlice.reducer;