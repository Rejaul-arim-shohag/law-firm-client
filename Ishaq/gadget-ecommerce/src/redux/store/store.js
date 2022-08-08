import { configureStore } from '@reduxjs/toolkit'
import brandReducer from '../state/brand.slice'
import loaderReducer from '../state/loader.slice'
import confettiReducer from '../state/confetti.slice'

export default configureStore({
    reducer: {
        brand: brandReducer,
        loader: loaderReducer,
        confetti:confettiReducer
    }
})