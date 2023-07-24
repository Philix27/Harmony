import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCountry = () =>
  createAsyncThunk("name", async (params: any) => {});

interface IPayload {
  index: number;
  length: number;
  country: {
    index: number;
    name: string;
    code: string;
    phone: string;
  }[];
  countryLoading: boolean;
}

const initialState: IPayload = {
  index: 0,
  length: 6,
  country: [],
  countryLoading: false,
};

export const ChatSettings = createSlice({
  name: "CHAT_SETTINGS",
  initialState,
  reducers: {
    get_settings: (state, action: PayloadAction) => {},
    update_settings: (state, action: PayloadAction) => {},
  },
});

export const OnboardActions = ChatSettings.actions;
export const ChatSettingsReducer = ChatSettings.reducer;
