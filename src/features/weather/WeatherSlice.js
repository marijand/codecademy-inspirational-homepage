import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchLocation = createAsyncThunk(
  "weather/fetchLocation",
  async (arg, thunkAPI) => {
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${arg.latitude}+${arg.longitude}&key=${process.env.REACT_APP_GEO_LOCATION_API}`
    );

    const json = await response.json();

    return json;
  }
);

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (arg, thunkAPI) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${arg}&appid=${process.env.REACT_APP_QUOTE_API}&units=metric`
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
    geolocation: undefined,
  },
  reducers: {},
  extraReducers: {
    [fetchLocation.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchLocation.fulfilled]: (state, action) => {
      state.geolocation = action.payload.results[0].components.city;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchLocation.rejected]: (state, action) => {
      console.log("Location API call failed.");
      state.isLoading = false;
      state.hasError = true;
    },
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
      console.log("Weather API call failed.");
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const selectGeolocation = (state) => state.weather.geolocation;

export const selectWeather = (state) => state.weather.weather;

export const weatherSliceReducer = WeatherSlice.reducer;
