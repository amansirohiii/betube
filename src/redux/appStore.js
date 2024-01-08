import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videosSlice from "./videosSlice";
import searchSlice from "./searchSlice";
const appStore= configureStore({
    reducer: {
        app: appSlice,
        videos: videosSlice,
        search: searchSlice
    }

});
export default appStore;