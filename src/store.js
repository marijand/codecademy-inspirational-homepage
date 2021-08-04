import { configureStore } from "@reduxjs/toolkit";
import { goalsSliceReducer } from "./features/goals/GoalsSlice";
import { quoteSliceReducer } from "./features/quote/QuoteSlice";
import { weatherSliceReducer } from "./features/weather/WeatherSlice";

export default configureStore({
  reducer: {
    goals: goalsSliceReducer,
    quote: quoteSliceReducer,
    weather: weatherSliceReducer,
  },
});
