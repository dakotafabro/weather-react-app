import React from "react";
import Search from "./Search";
import CityInfo from "./CityInfo";
import MainWeather from "./MainWeather";
import ChanceOfRain from "./ChanceOfRain";
import "./MainBody.css";

export default function MainBody() {
  return (
    <div className="MainBody">
      <Search />
      <CityInfo />
      <MainWeather />
      <ChanceOfRain />
    </div>
  );
}
