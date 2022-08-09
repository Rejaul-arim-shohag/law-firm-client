import {createSlice} from "@reduxjs/toolkit";
export const attorneySlice=createSlice({
    name:'attorney',
    initialState:{attorneyList:[]},
    reducers:{
        SetAttorney:(state,action)=>{
            state.attorneyList=action.payload
        },
        
    }
})
export const {SetAttorney}=attorneySlice.actions;
export default  attorneySlice.reducer;