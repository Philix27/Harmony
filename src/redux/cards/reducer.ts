import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { initialState } from "./types";
import Actions from "./actions";

export const CardsReducer = createSlice({
  name: "CARDS",
  initialState,
  reducers: {
    ...Actions
  },
});
