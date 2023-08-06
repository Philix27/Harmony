import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { store } from "./";
import { persistStore, persistReducer } from "redux-persist";
import TabReducer from "../slice/tab";



const rootPersistConfig = {
  key: "root",
  storage: storage,
  version: 1,
};

const authPersistConfig = {
  key: "auth",
  storage: storage,
  version: 1,
  blacklist: [],
};

const rootReducer = combineReducers({
  TabReducer,
});

export const persistedRootReducer = persistReducer(
  rootPersistConfig,
  rootReducer
);
