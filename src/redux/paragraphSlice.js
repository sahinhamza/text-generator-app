import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getParagraphAsync = createAsyncThunk("paragraph/getParagraphAsync", async (url) => {
    const res = await axios.get(url);

    return res.data;
})

export const paragraphSlice = createSlice({
    name: "paragraph",
    initialState: {
        paras: 4,
        format: "text",
        text: "",
        isLoading: false,
        error: null
    },
    reducers: {
        changeParas: (state, action) => {
            state.paras = action.payload
        },
        changeFormat: (state, action) => {
            state.format = action.payload
        }
    },
    extraReducers: {
        [getParagraphAsync.pending]: state => {
            state.isLoading = true
        },
        [getParagraphAsync.fulfilled]: (state, action) => {
            state.isLoading = false
            state.text = action.payload
        },
        [getParagraphAsync.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        },

    }
});

export const { changeParas, changeFormat } = paragraphSlice.actions;
export default paragraphSlice.reducer;