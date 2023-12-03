import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import commentSlice from "./commentSlice";

const store = configureStore({
   reducer:{
    app: navSlice,
    search: searchSlice,
    chat: chatSlice,
    comment: commentSlice
   }
});


export default store