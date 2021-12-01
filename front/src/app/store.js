import { configureStore } from '@reduxjs/toolkit';
import deviceReducer from  './deviceSlice.js';
import userReducer from  './userSlice.js';

export const store = configureStore({
    reducer: {
      device: deviceReducer,
      user: userReducer,
    },
  });