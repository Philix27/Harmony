import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    packages: {},
    error: ''
};


const fetch_packages = createAsyncThunk('', () => {
    return axios.get("").then((response) => { })
})


export const TabSlice = createSlice({
    name: "MARKET",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetch_packages.pending, state => {
            state.loading = true;
        });
        builder.addCase(fetch_packages.fulfilled, (state, actions) => {
            state.packages = actions.payload;
        });
        builder.addCase(fetch_packages.rejected, (state, actions) => {
            state.error = actions.error.message
        });
    },
    reducers: undefined
});

export const {  } = TabSlice.actions;

const TabReducer = TabSlice.reducer;
export default TabReducer;
