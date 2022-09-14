import { createSlice } from '@reduxjs/toolkit';
export const appointmentSlice = createSlice({
    name: 'appointments',
    initialState: {
        New: [],
        Completed: [],
        Canceled: []
    },
    reducers: {
        setNewAppointment: (state, action) => {
            state.New = action.payload
        }, 
        setCompletedAppointment:(state, action)=>{
            state.Completed = action.payload
        }, 

        SetCanceledAppointment:(state,action)=>{
            state.Canceled = action.payload
        }
    }
})
export const { setNewAppointment, setCompletedAppointment, SetCanceledAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;