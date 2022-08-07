import { createSlice } from '@reduxjs/toolkit'
export const loaderSlice = createSlice({
    name: "loader",
    initialState: {
        progress: 0
    },
    reducers: {
        initLoader: (state) => {
            state.progress = 0
        },
        showLoader: (state) => {
            state.progress += 30
        },
        hideLoader: (state) => {
            state.progress += 100
        }

    }
})

export const { initLoader, showLoader, hideLoader } = loaderSlice.actions;
export default loaderSlice.reducer;