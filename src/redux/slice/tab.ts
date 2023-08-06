import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ITab {
  name: string;
}
const initialState: ITab = {
  name: "HOME",
};

export const TabSlice = createSlice({
  name: "ACTIVE_TAB",
  initialState,
  reducers: {
    changeTab: (state, action: PayloadAction<ITab>) => {
      state.name = action.payload.name;
      console.log("Reached change");
      console.log("Payload", action.payload);
    },
  },
});

export const { changeTab } = TabSlice.actions;
const TabReducer = TabSlice.reducer;
export default TabReducer;
