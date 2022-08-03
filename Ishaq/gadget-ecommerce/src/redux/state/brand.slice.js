import { createSlice } from '@reduxjs/toolkit'
export const brandSlice = createSlice({
    name: "brand",
    initialState: {
        total: 0,
        allBrand: []
    },
    reducers: {
        setTotal: (state, action) => {
            state.total = action.payload
        },
        setALLBrand: (state, action) => {
            state.allBrand = action.payload

        }
    }
})

export const { setTotal, setALLBrand } = brandSlice.actions;
export default brandSlice.reducer;