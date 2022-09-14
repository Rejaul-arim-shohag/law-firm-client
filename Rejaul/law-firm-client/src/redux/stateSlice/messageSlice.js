import { createSlice } from '@reduxjs/toolkit';
export const messageSlice = createSlice({
    name: 'message',
    initialState: {
        New: [],
        Completed: [],
        Canceled: []
    },
    reducers: {
        setNewMessage: (state, action) => {
            state.New = action.payload
        }, 
        setCompletedMessage:(state, action)=>{
            state.Completed = action.payload
        }, 
        SetCanceledMessage:(state,action)=>{
            state.Canceled = action.payload
        }
    }
})
export const { setNewMessage, setCompletedMessage,SetCanceledMessage } = messageSlice.actions;
export default messageSlice.reducer;