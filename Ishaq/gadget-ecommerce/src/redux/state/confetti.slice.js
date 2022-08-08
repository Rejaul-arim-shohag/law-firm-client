import { createSlice } from '@reduxjs/toolkit';
export const confettiSlice = createSlice({
    name: "confetti",
    initialState: {
        success: false
    },
    reducers: {
        setSuccess: (state,action) => {
            state.success = action.payload
        }

    }
})

export const { setSuccess } = confettiSlice.actions;
export default confettiSlice.reducer;