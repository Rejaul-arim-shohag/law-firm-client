import { configureStore } from "@reduxjs/toolkit";
import brandReducer from '../state/brand.slice'
 const store = configureStore({
    reducer:{
        brands:brandReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
