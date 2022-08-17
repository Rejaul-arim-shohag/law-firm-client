import { createSlice } from '@reduxjs/toolkit';
export const reviewSlice = createSlice({
    name: 'reviews',
    initialState: {
        New: [],
        Completed: [],
        Canceled: []
    },
    reducers: {
        setNewReviews: (state, action) => {
            state.New = action.payload
        }, 
        setCompletedReviews:(state, action)=>{
            state.Completed = action.payload
        }, 
        SetCanceledTask:(state,action)=>{
            state.Canceled = action.payload
        }
    }
})
export const { setNewReviews, setCompletedReviews,SetCanceledTask } = reviewSlice.actions;
export default reviewSlice.reducer;