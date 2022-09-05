import {createSlice} from "@reduxjs/toolkit";
export const chooiceUsSlice=createSlice({
    name:'chooiceUs',
    initialState:{chooiceUsList:[]},
    reducers:{
        SetchooiceUs:(state,action)=>{
            state.chooiceUsList=action.payload
        },
        
    }
})
export const {SetchooiceUs}=chooiceUsSlice.actions;
export default  chooiceUsSlice.reducer;