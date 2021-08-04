import { createSlice } from "@reduxjs/toolkit";

export const WeatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: {
      temperature: "39.85",
      description: "Broken Clouds",
      icon: "http://openweathermap.org/img/wn/50d@2x.png",
    },
  },
  reducers: {
    updateWeather: (state, action) => {
      state.weather = action.payload;
    },
  },
});

export const selectWeather = (state) => state.weather;

export const { updateWeather } = WeatherSlice.actions;

export const weatherSliceReducer = WeatherSlice.reducer;
