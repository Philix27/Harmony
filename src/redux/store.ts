import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const composeEnhancers = compose(applyMiddleware(...middlewares));

export const ReduxStore = configureStore({
  reducer: {
    ...reducers,
    composeEnhancers: compose,
  },
});

export type RootState = ReturnType<typeof ReduxStore.getState>;
export type AppDispatch = typeof ReduxStore.dispatch;

export const selectTab = (state: RootState) => state.tabs;
// export const selectCounter = (state: RootState) => state.counter;
