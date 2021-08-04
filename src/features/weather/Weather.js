import React from "react";
import "./Weather.css";

export const Weather = () => {
  // Add weather slice
  let temperature = "59.86°";
  let description = "Haze";
  let icon = "http://openweathermap.org/img/wn/50d@2x.png";
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
