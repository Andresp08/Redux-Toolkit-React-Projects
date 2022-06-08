
import { configureStore } from '@reduxjs/toolkit';
import { coctelSlice } from './slices/coctel';

export const store = configureStore({
    reducer:{
        coctels: coctelSlice.reducer
    }
})