import {createSlice} from "@reduxjs/toolkit";
export const blogSlice=createSlice({
    name:'blogs',
    initialState:{blogList:[]},
    reducers:{
        Setblogs:(state,action)=>{
            state.blogList=action.payload
        },
        
    }
})
export const {Setblogs}=blogSlice.actions;
export default  blogSlice.reducer;