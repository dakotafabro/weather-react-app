import React from "react";
import "./CityInfo.css";

export default function CityInfo() {
  return (
    <div className="CityInfo">
      <h1 className="cityHeading">Welcome. Enter A City...</h1>
      <h2 id="currentCityInfo">Monday, April 5th, 2021</h2>
      <h3 id="currentDescription">Partly Cloudy</h3>
    </div>
  );
}
