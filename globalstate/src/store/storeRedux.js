// src/store/storeRedux.js

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store; // Sử dụng default export
