import { createSlice } from "@reduxjs/toolkit";
import background from "../../resources/yosemite.jpeg";

export const BackgroundSlice = createSlice({
  name: "background",
  initialState: {
    background: {
      image: background,
    },
  },
  reducers: {
    updateQuote: (state, action) => {
      state.background = action.payload;
    },
  },
});

export const selectBackground = (state) => state.background.background.image;

export const { updateBackground } = BackgroundSlice.actions;

export const backgroundSliceReducer = BackgroundSlice.reducer;
