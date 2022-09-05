import {createSlice} from "@reduxjs/toolkit";
export const singleBlogSlice=createSlice({
    name:'singleBlog',
    initialState:{singleBlog:{}},
    reducers:{
        SetSingleBlog:(state,action)=>{
            state.singleBlog=action.payload
        },
        
    }
})
export const {SetSingleBlog}=singleBlogSlice.actions;
export default  singleBlogSlice.reducer;