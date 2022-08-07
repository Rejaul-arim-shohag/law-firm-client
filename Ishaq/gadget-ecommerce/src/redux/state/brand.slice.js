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
        },
        setChecked: (state, action) => {
            state.allBrand = state.allBrand?.map(i => i._id === action.payload.id ? { ...i, isChecked: action.payload.checked } : i)
        },
        allChecked: (state, action) => {
            // console.log('action.payload',action.payload)
            state.allBrand = state.allBrand?.map(i => { return { ...i, isChecked: action.payload } })
        }


    }
})

export const { setTotal, setALLBrand, setChecked, allChecked } = brandSlice.actions;
export default brandSlice.reducer;