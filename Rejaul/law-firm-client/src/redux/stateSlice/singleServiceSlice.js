import {createSlice} from "@reduxjs/toolkit";
export const singleService=createSlice({
    name:'singleService',
    initialState:{singleservice:{}},
    reducers:{
        SetSingleService:(state,action)=>{
            state.singleservice=action.payload
        },
    }
})
export const {SetSingleService}=singleService.actions;
export default  singleService.reducer;