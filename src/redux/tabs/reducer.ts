import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { initialState } from "./types";
import Actions from "./actions";

export const TabsReducer = createSlice({
  name: "TAB",
  initialState,
  reducers: {
    ...Actions
  },
});
