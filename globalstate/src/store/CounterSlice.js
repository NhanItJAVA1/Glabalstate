// src/store/CounterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  previousCount: 0,
  history: []
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.previousCount = state.count;
      state.count += 1;
      state.history.push(state.count);
    },
    decrement: (state) => {
      state.previousCount = state.count;
      state.count -= 1;
      state.history.push(state.count);
    },
    reset: (state) => {
      state.previousCount = state.count;
      state.count = 0;
      state.history.push(state.count);
    },
    undo: (state) => {
      if (state.history.length > 1) {
        state.history.pop();
        state.count = state.history[state.history.length - 1];
      }
    },
  },
});

export const { increment, decrement, reset, undo } = counterSlice.actions;
export default counterSlice.reducer;
