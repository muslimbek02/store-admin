import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "../slices/storesSlices";
import formDataReducer from "../slices/formDataSlice";

export const store = configureStore({
  reducer: {
    'shop': storeReducer,
    'formdata': formDataReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})