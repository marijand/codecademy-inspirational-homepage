import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Weather.css";
import { fetchWeather, selectWeather } from "./WeatherSlice";

import ClipLoader from "react-spinners/ClipLoader";

export const Weather = () => {
  const dispatch = useDispatch();
  const weather = useSelector(selectWeather);

  console.log(process.env);

  console.log(process.env.REACT_APP_BACKGROUND_API);
  console.log(process.env.REACT_APP_QUOTE_API);

  useEffect(() => {
    if (weather === undefined) {
      dispatch(fetchWeather());
    }
  }, [dispatch, weather]);

  let temperature = 0;
  let description = "";
  let icon = null;

  if (weather !== undefined) {
    temperature = weather.main.temp;
    description = weather.weather[0].description;
    icon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  }

  return weather === undefined ? (
    <div className="Weather">
      <ClipLoader size={70} color="white" />
    </div>
  ) : (
    <div className="Weather">
      <img src={icon} alt="Shows a weather icon" />

      <div>
        <h2>{temperature}</h2>
        <h3>{description}</h3>
      </div>
    </div>
  );
};
