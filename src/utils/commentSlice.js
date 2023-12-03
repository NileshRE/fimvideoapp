import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
    name: "comment",
    initialState:{
        comments:[]
    },
    reducers:{
        addComment:(state, action)=>{
            state.comments.splice(15, 1);
            state.comments.unshift(action.payload);
        },
    }
})

export const {addComment} = commentSlice.actions;

export default commentSlice.reducer;