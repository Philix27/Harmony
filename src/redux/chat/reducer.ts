import { createSlice } from "@reduxjs/toolkit";
import Actions from "./actions";
import { ChatTabsType } from "types";

interface IPayload {
  is_info_bar_open?: boolean;
  active_tab?: ChatTabsType;
}

const initialState: IPayload = {
  is_info_bar_open: false,
  active_tab: "CHAT",
};

export const ChatReducer = createSlice({
  name: "CHAT",
  initialState,
  reducers: {
    ...Actions,
  },
});
