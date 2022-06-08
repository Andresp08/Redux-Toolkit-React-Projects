
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 1
    },
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            state.counter -= 1;
        },
        incrementByN: (state, action) => {
            state.counter += action.payload;
        }
    }
})

//actions
export const { increment,decrement, incrementByN } = counterSlice.actions;
// export default counterSlice.reducer;