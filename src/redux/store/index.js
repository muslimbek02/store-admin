import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "../slices/storesSlices";
export const store = configureStore({
  reducer: {
    storeState: storeReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})