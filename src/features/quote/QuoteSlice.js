import { createSlice } from "@reduxjs/toolkit";

export const QuoteSlice = createSlice({
  name: "quote",
  initialState: {
    quote: {
      text: "If you want to make your dreams come true, the first thing you have to do is wake up.",
      author: "J.M. Power",
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
