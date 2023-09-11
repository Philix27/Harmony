import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { initialState } from "./types";
import Actions from "./actions";

export const ChatReducer = createSlice({
  name: "CHAT",
  initialState,
  reducers: {
    ...Actions
  },
});
