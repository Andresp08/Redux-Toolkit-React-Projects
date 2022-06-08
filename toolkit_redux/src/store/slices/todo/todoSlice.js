import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'counter',
    initialState: {
       counter: 10
    },
    reducers: {
        increment: (state) => {
           state.value += 1
        },
    },
});

export const { increment, decrement, incrementByAmount } = todoSlice.actions
export default todoSlice.reducer