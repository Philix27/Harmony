import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const CounterSlice = createSlice({
  name: "Counteer",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = CounterSlice.actions;

const CounterReducer = CounterSlice.reducer;
export default CounterReducer;
