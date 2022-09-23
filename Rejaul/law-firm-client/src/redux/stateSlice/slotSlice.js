import {createSlice} from "@reduxjs/toolkit";
export const slotSlice=createSlice({
    name:'slot',
    initialState:{slotList:[]},
    reducers:{
        SetSlotList:(state,action)=>{
            state.slotList=action.payload
        },
    }
})
export const {SetSlotList}=slotSlice.actions;
export default  slotSlice.reducer;