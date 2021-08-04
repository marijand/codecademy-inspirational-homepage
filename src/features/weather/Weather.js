import React from "react";
import { useSelector } from "react-redux";
import "./Weather.css";
import { selectWeather } from "./WeatherSlice";

export const Weather = () => {
  // Add weather slice
  const { temperature, description, icon } = useSelector(selectWeather).weather;

  return (
    <div className="Weather">
      <img src={icon} />

      <div>
        <h2>{temperature}</h2>
        <h3>{description}</h3>
      </div>
    </div>
  );
};
