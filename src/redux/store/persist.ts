import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { store } from "./";
import { persistStore, persistReducer } from "redux-persist";
import { TabsReducer } from "redux/tabs/reducer";

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
export const AppActions = {
  tab: TabsReducer.actions,
};
const rootReducer = combineReducers({
  tabs: TabsReducer.reducer,
});

export const persistedRootReducer = persistReducer(
  rootPersistConfig,
  rootReducer
);
