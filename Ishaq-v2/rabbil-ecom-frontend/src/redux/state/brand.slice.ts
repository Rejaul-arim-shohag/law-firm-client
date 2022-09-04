import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface BrandState{
    totalBrand: number,
    brandList: {
        _id:string,
        img:string,
        name:string,
        des:string
    }[]
}

const initialState:BrandState = {
    totalBrand:0,
    brandList:[]
}

export const brandSlice = createSlice({
    name: "brands",
    initialState,
    reducers: {
        setTotalBrand: (state, action: PayloadAction<number>) => {
            state.totalBrand = action.payload
        },
        setBrandList: (state, action: PayloadAction<[]>) => {
            state.brandList = action.payload
        }
    }
})

export const {setTotalBrand,setBrandList} = brandSlice.actions
export default brandSlice.reducer;