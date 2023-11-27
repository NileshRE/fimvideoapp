import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen: true,
        isDarkMode: true,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        toggleDarkMode:(state)=>{
            state.isDarkMode=!state.isDarkMode;
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        }
    }
})

export const {toggleMenu, toggleDarkMode, closeMenu} = navSlice.actions;
export default navSlice.reducer