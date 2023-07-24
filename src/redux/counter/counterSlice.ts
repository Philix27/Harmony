import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const CounterReducer = createSlice({
  name: "Counter",
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

// export const { increment, decrement, reset } = CounterReducer.actions;

// const CounterReducer = CounterSlice.reducer;
// export default CounterReducer;
