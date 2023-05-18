import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./features/counterSlice";

export const ReduxStore = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});
