import {createSlice} from "@reduxjs/toolkit";
export const serviceSlice=createSlice({
    name:'services',
    initialState:{serviceList:[]},
    reducers:{
        SetServices:(state,action)=>{
            state.serviceList=action.payload
        },
        
    }
})
export const {SetServices}=serviceSlice.actions;
export default  serviceSlice.reducer;