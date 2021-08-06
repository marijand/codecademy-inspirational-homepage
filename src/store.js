import { configureStore } from "@reduxjs/toolkit";
import { backgroundSliceReducer } from "./features/background/BackgroundSlice";
import { goalsSliceReducer } from "./features/goals/GoalsSlice";
import { quoteSliceReducer } from "./features/quote/QuoteSlice";
import { weatherSliceReducer } from "./features/weather/WeatherSlice";

export default configureStore({
  reducer: {
    goals: goalsSliceReducer,
    quote: quoteSliceReducer,
    weather: weatherSliceReducer,
    background: backgroundSliceReducer,
  },
});
