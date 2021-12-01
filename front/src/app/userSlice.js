import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {login} from '../http/userApi.js';

const initialState = {
    value: {users:[]},
    status: 'idle',
    user: {
        isAuth: false,
    },
    message:''
};


export const createUserAsync = createAsyncThunk(
    'user/createUser',
    async (data) => {
        const response = await login(data);
        return response.data;
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(createUserAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createUserAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.user = action.payload;
            })
    },
});

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;