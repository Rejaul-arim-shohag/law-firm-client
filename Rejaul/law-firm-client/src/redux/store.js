import { configureStore } from '@reduxjs/toolkit';
import settingReducer from "../redux/stateSlice/settingSlice";
import attorneyReducer from "../redux/stateSlice/attorneySlice";
import servicesReducer from "../redux/stateSlice/servicesSlice";
import planReducer from "../redux/stateSlice/ourPlanSlice"
export default configureStore({
    reducer:{
        settings:settingReducer,
        attorney:attorneyReducer,
        services:servicesReducer,
        plans:planReducer,
    }
})