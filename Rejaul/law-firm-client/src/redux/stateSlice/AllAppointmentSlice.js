import { createSlice } from '@reduxjs/toolkit';
export const AllAppointmentSlice = createSlice({
    name: 'allAppointment',
    initialState: {
        Total:0,
        New: [],
        Completed: [],
        Canceled: [],
        All:[]
    },
    reducers: {
        SetTotal:(state,action)=>{
            state.Total=action.payload
        },
        setAllNewAppointment: (state, action) => {
            state.New = action.payload
        }, 
        setAllCompletedAppointment:(state, action)=>{
            state.Completed = action.payload
        }, 
        SetAllCanceledAppointment:(state,action)=>{
            state.Canceled = action.payload
        },
        setAllAppointment:(state,action)=>{
            state.All = action.payload
        }
    }
})
export const {SetTotal,setAllAppointment, setAllNewAppointment, setAllCompletedAppointment, SetAllCanceledAppointment } = AllAppointmentSlice.actions;
export default AllAppointmentSlice.reducer;