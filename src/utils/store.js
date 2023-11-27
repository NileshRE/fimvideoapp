import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";

const store = configureStore({
   reducer:{
    app: navSlice
   }
});


export default store