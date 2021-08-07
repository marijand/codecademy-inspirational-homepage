import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBackground = createAsyncThunk(
  "background/fetchBackground",
  async (api, thunkAPI) => {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=${process.env.REACT_APP_BACKGROUND_API}`
    );

    const json = await response.json();

    return json;
  }
);

export const BackgroundSlice = createSlice({
  name: "background",
  initialState: {
    background: undefined,
  },
  reducers: {},
  extraReducers: {
    [fetchBackground.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchBackground.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.background = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchBackground.rejected]: (state, action) => {
      console.log("Splash API call failed.");
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const selectBackground = (state) => state.background.background;

export const { updateBackground } = BackgroundSlice.actions;

export const backgroundSliceReducer = BackgroundSlice.reducer;
