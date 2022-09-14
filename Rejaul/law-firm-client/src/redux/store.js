import { configureStore } from '@reduxjs/toolkit';
import settingReducer from "../redux/stateSlice/settingSlice";
import attorneyReducer from "../redux/stateSlice/attorneySlice";
import servicesReducer from "../redux/stateSlice/servicesSlice";
import planReducer from "../redux/stateSlice/ourPlanSlice"
import sinlgeAttorneyReducer from "../redux/stateSlice/singleAttorneySlice"
import singleServiceReducer from "../redux/stateSlice/singleAttorneySlice"
import reviewReducer from "../redux/stateSlice/reviewSlice";
import chooiceUsReducer from "../redux/stateSlice/chooiceUsSlice";
import blogReducer from "../redux/stateSlice/blogSlice"
import singleBlogReducer from "../redux/stateSlice/singleBlogSlice";
import certificateReducer from "../redux/stateSlice/certificateSlice";
import appointmentReducer from "../redux/stateSlice/appointmentSlice";
import messageReducer from "../redux/stateSlice/messageSlice";
import allAppointmentReducer from "../redux/stateSlice/AllAppointmentSlice"
export default configureStore({
    reducer:{
        settings:settingReducer,
        attorney:attorneyReducer,
        services:servicesReducer,
        plans:planReducer,
        singleAttorney:sinlgeAttorneyReducer,
        singleService:singleServiceReducer,
        reviews:reviewReducer,
        chooiceUs:chooiceUsReducer,
        blogs:blogReducer,
        singleBlog:singleBlogReducer,
        certificate:certificateReducer,
        appointment:appointmentReducer,
        message:messageReducer,
        allAppointment:allAppointmentReducer
    }
})