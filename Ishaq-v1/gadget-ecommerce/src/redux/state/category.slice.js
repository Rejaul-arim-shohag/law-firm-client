import { createSlice } from '@reduxjs/toolkit'
export const categorySlice = createSlice({
    name: "category",
    initialState: {
        totalCategory: 0,
        allCategory: []
    },
    reducers: {
        setTotalCategory: (state, action) => {
            state.totalCategory = action.payload
        },
        setALLCategory: (state, action) => {
            state.allCategory = action.payload
        },
        setCategoryChecked: (state, action) => {
            state.allCategory = state.allCategory?.map(i => i._id === action.payload.id ? { ...i, isChecked: action.payload.checked } : i)
        },
        allCategoryChecked: (state, action) => {
            // console.log('action.payload',action.payload)
            state.allCategory = state.allCategory?.map(i => { return { ...i, isChecked: action.payload } })
        }
      


    }
})

export const { setTotalCategory, setALLCategory, setCategoryChecked, allCategoryChecked} = categorySlice.actions;
export default categorySlice.reducer;