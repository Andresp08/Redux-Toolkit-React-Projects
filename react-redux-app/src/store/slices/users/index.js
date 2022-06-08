
import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

//axios
import axios from 'axios';

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        listUser: []
    },
    reducers: {  //actions
        setListUser: (state,action) => {
            state.listUser = action.payload
        }
    },
});

export const { setListUser } = userSlice.actions;

export default userSlice.reducer;

export const fetchAllUsers = () => (dispatch) => {
    axios
    .get('https://reqres.in/api/users?per_page=12')
    .then(response => {
        dispatch (setListUser(response.data.data))
    })
    .catch(err => console.log(err))
}

