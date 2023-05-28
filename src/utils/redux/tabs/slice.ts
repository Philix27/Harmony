import { createSlice } from "@reduxjs/toolkit";
import { ACTIVE_TAB } from "./state";

const initialState = {
  activeTab: "HOME",
};

export const TabSlice = createSlice({
  name: "ACTIVE_TAB",
  initialState,
  reducers: {
    changeTab: (state, action) => {
      state.activeTab = action.payload
    },
  },
});


export const { changeTab } = TabSlice.actions;
const TabReducer = TabSlice.reducer;
export default TabReducer;
