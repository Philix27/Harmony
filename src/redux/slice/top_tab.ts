import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ITopTab {
  name: string;
  org_name: string;
}
const initialState: ITopTab = {
  name: "CHAT",
  org_name: "HOME",
};

export const Slice = createSlice({
  name: "TOP_TAB",
  initialState,
  reducers: {
    changeTab: (state, action: PayloadAction<ITopTab>) => {
      state = action.payload;
    },
  },
});

export const TopTabActions = Slice.actions;
const TopTabReducer = Slice.reducer;
export default TopTabReducer;
