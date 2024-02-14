import { createSlice } from "@reduxjs/toolkit";
import Actions from "./actions";
import { TabsType } from "types";

interface IPayload {
  name: TabsType;
  org_name: string;
}

const initialState: IPayload = {
  name: "CHAT",
  org_name: "ORG",
};

export const TabsReducer = createSlice({
  name: "TAB",
  initialState,
  reducers: {
    ...Actions,
  },
});
