import { createSlice } from "@reduxjs/toolkit";

export const QuoteSlice = createSlice({
  name: "quote",
  initialState: {
    quote: {
      Text: "Named must your feat be before naish it you can.",
      Author: "Yoda",
    },
  },
  reducers: {
    updateQuote: (state, action) => {
      state.quote = action.payload;
    },
  },
});

export const selectQuote = (state) => state.quote;

export const { updateQuote } = QuoteSlice.actions;

export const quoteSliceReducer = QuoteSlice.reducer;
