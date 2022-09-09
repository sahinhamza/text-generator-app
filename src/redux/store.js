import {configureStore} from "@reduxjs/toolkit";
import paragraphSliceReducer from "./paragraphSlice"

export const store = configureStore({
    reducer:{
        paragraph: paragraphSliceReducer
    }
})
