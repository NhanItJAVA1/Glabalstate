// store.js
import { createStore } from "redux";

// Action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const UNDO = "UNDO";

// Action creators
export const increment = (payload = 1) => ({
  type: INCREMENT,
  payload,
});

export const decrement = (payload = 1) => ({
  type: DECREMENT,
  payload,
});

export const reset = () => ({
  type: RESET,
});

export const undo = () => ({
  type: UNDO,
});

// Initial state
const initialState = {
  count: 0,
  previousCount: null, // Will hold the last count before the action
  history: [], // For Undo functionality
};

// Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        previousCount: state.count,
        count: state.count + action.payload,
        history: [...state.history, state.count],
      };
    case DECREMENT:
      return {
        ...state,
        previousCount: state.count,
        count: state.count - action.payload,
        history: [...state.history, state.count],
      };
    case RESET:
      return {
        ...state,
        previousCount: state.count,
        count: 0,
        history: [...state.history, state.count],
      };
    case UNDO:
      if (state.history.length > 0) {
        const lastHistory = state.history[state.history.length - 1];
        return {
          ...state,
          count: lastHistory,
          previousCount: state.count,
          history: state.history.slice(0, -1),
        };
      }
      return state;
    default:
      return state;
  }
};

// Create store
const store = createStore(counterReducer);

export default store;
