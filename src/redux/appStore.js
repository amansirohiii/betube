import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videosSlice from "./videosSlice";
const appStore= configureStore({
    reducer: {
        app: appSlice,
        videos: videosSlice
    }

});
export default appStore;