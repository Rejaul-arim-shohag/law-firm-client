import { createSlice } from '@reduxjs/toolkit'
export const brandSlice = createSlice({
    name: "brand",
    initialState: {
        totalBrand: 0,
        allBrand: []
    },
    reducers: {
        setTotalBrand: (state, action) => {
            state.totalBrand = action.payload
        },
        setALLBrand: (state, action) => {
            state.allBrand = action.payload
        },
        setBrandChecked: (state, action) => {
            state.allBrand = state.allBrand?.map(i => i._id === action.payload.id ? { ...i, isChecked: action.payload.checked } : i)
        },
        allBrandChecked: (state, action) => {
            state.allBrand = state.allBrand?.map(i => { return { ...i, isChecked: action.payload } })
        }
    }
})

export const { setTotalBrand, setALLBrand, setBrandChecked, allBrandChecked} = brandSlice.actions;
export default brandSlice.reducer;