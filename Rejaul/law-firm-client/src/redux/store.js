import { configureStore } from '@reduxjs/toolkit';
import settingReducer from "../redux/stateSlice/settingSlice";
export default configureStore({
    reducer:{
        settings:settingReducer,
    }
})