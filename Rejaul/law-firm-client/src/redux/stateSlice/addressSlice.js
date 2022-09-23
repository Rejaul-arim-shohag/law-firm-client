import {createSlice} from "@reduxjs/toolkit";
export const addressSlice=createSlice({
    name:'address',
    initialState:{addressList:[]},
    reducers:{
        SetAddress:(state,action)=>{
            state.addressList=action.payload
        },
    }
})
export const {SetAddress}=addressSlice.actions;
export default  addressSlice.reducer;