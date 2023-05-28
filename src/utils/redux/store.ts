import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counter/counterSlice";
import TabReducer from "./tabs/tab_slice";

export const ReduxStore = configureStore({
  reducer: {
    counter: CounterReducer,
    tabs: TabReducer,
  },
});

export type RootState = ReturnType<typeof ReduxStore.getState>;
export type AppDispatch = typeof ReduxStore.dispatch;

export const selectTab = (state: RootState) => state.tabs;
export const selectCounter = (state: RootState) => state.counter;
