import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (api, thunkAPI) => {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Schwaz&appid=7dfed27e324708866f3759944e4cc772&units=metric"
    );

    const json = await response.json();

    return json;
  }
);

export const WeatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: undefined,
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    [fetchWeather.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchWeather.fulfilled]: (state, action) => {
      state.weather = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchWeather.rejected]: (state, action) => {
      console.log("rejected");
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const selectWeather = (state) => state.weather.weather;

export const weatherSliceReducer = WeatherSlice.reducer;
