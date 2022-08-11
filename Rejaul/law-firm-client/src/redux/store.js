import { configureStore } from '@reduxjs/toolkit';
import settingReducer from "../redux/stateSlice/settingSlice";
import attorneyReducer from "../redux/stateSlice/attorneySlice";
import servicesReducer from "../redux/stateSlice/servicesSlice";
import planReducer from "../redux/stateSlice/ourPlanSlice"
import sinlgeAttorneyReducer from "../redux/stateSlice/singleAttorneySlice"
import singleServiceReducer from "../redux/stateSlice/singleAttorneySlice"
export default configureStore({
    reducer:{
        settings:settingReducer,
        attorney:attorneyReducer,
        services:servicesReducer,
        plans:planReducer,
        singleAttorney:sinlgeAttorneyReducer,
        singleService:singleServiceReducer,
    }
})