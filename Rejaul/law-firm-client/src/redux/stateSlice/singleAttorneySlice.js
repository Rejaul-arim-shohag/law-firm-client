import {createSlice} from "@reduxjs/toolkit";
export const singleattorney=createSlice({
    name:'singleAttorney',
    initialState:{singleattorney:{}},
    reducers:{
        SetSingleAttorney:(state,action)=>{
            state.singleattorney=action.payload
        },
    }
})
export const {SetSingleAttorney}=singleattorney.actions;
export default  singleattorney.reducer;