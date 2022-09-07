import {createSlice} from "@reduxjs/toolkit";
export const certificateSlice=createSlice({
    name:'certificate',
    initialState:{certificateList:[]},
    reducers:{
        Setcertificate:(state,action)=>{
            state.certificateList=action.payload
        },
        
    }
})
export const {Setcertificate}=certificateSlice.actions;
export default  certificateSlice.reducer;