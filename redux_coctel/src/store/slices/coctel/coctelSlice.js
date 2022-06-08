
import { createSlice } from '@reduxjs/toolkit';

export const coctelSlice = createSlice({
    name: 'coctel',
    initialState: {
        isLoading: false,
        cocteles: []
    },
    reducers: {
        startCoctels: (state) => {
            state.isLoading = true;
        },
        setCoctels: (state, action) => {
            state.isLoading = false;
            state.cocteles = action.payload;
        }
    }
})

export const { startCoctels, setCoctels } = coctelSlice.actions;