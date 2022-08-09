import {createSlice} from "@reduxjs/toolkit";
export const ourPlanSlice=createSlice({
    name:'plans',
    initialState:{plansList:[]},
    reducers:{
        SetPlans:(state,action)=>{
            state.plansList=action.payload
        },
        
    }
})
export const {SetPlans}=ourPlanSlice.actions;
export default  ourPlanSlice.reducer;