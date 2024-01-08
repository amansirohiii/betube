import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chatMessages: []
    },
    reducers: {
        addChatMessage: (state, action)=>{
            state.chatMessages.splice(20, 1);
            state.chatMessages.unshift(action.payload);
        }
    }
})

export const {addChatMessage}=chatSlice.actions;
export default chatSlice.reducer;