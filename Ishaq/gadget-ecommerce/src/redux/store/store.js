import { configureStore } from '@reduxjs/toolkit'
import brandReducer from '../state/brand.slice'
import loaderReducer from '../state/loader.slice'

export default configureStore({
    reducer: {
        brand: brandReducer,
        loader: loaderReducer,
    }
})