import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {createDevice} from '../http/deviceApi.js';

const initialState = {
    value: {devices:[]},
    status: 'idle',
    device: {},
    message:''
};


export const createDeviceAsync = createAsyncThunk(
    'device/createDevice',
    async (data) => {
        const response = await createDevice(data);
        return response.data;
    }
);

export const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(createDeviceAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createDeviceAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.device = action.payload;
            })
    },
});

export const selectDevice = (state) => state.device.device;

export default deviceSlice.reducer;