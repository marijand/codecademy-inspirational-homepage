import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Weather.css";
import {
  fetchLocation,
  fetchWeather,
  selectGeolocation,
  selectWeather,
} from "./WeatherSlice";

export const Weather = () => {
  const dispatch = useDispatch();
  let weather = useSelector(selectWeather);

  let geolocation = useSelector(selectGeolocation);

  // Sometimes the api returns city names that consits several cities
  // For example, Lourinhã e Atalaia. In this case, I retrieve the first city name
  if (geolocation !== undefined) {
    geolocation = geolocation.split(" ")[0];
  }

  useEffect(() => {
    // get current geolocation
    const successfulLookup = (position) => {
      if (position.coords.latitude !== undefined) {
        dispatch(fetchLocation(position.coords));
      }
    };

    window.navigator.geolocation.getCurrentPosition(
      successfulLookup,
      console.log
    );

    if (weather === undefined && geolocation !== undefined) {
      dispatch(fetchWeather(geolocation));
    }
  }, [dispatch, weather, geolocation]);

  let temperature = "--";
  let description = "--------";
  let icon = `http://openweathermap.org/img/wn/03d@2x.png`;

  if (weather !== undefined) {
    if (!weather.hasOwnProperty("cod")) {
      console.log(weather);
      temperature = weather.main.temp;
      description = weather.weather[0].description;
      icon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    }
  }

  return (
    <div className="Weather">
      <img src={icon} alt="Shows a weather icon" />

      <div>
        <h2>{temperature}</h2>
        <h3>{description}</h3>
      </div>
    </div>
  );
};
