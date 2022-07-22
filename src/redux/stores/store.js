import { configureStore } from "@reduxjs/toolkit";
import pagesSlice from "../slices/pagesSlice";

export const store = configureStore({
  reducer: {
    page1: pagesSlice,
  },
});
