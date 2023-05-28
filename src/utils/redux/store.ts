import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counter/counterSlice";
import TabReducer from "./tabs/slice";

export const ReduxStore = configureStore({
  reducer: {
    counter: CounterReducer,
    tabs: TabReducer,
  },
});
