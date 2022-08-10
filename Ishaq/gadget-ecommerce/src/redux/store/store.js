import { configureStore } from '@reduxjs/toolkit'
import brandReducer from '../state/brand.slice'
import loaderReducer from '../state/loader.slice'
import confettiReducer from '../state/confetti.slice'
import categoryReducer from '../state/category.slice'

export default configureStore({
    reducer: {
        brand: brandReducer,
        category:categoryReducer,



        loader: loaderReducer,
        confetti:confettiReducer
    }
})