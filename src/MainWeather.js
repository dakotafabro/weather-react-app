import React from "react";
import "./MainWeather.css";

export default function MainWeather() {
  return (
    <div className="MainWeather">
      <span className="highTemp">H: 20°</span>
      <br />
      <span className="bigTemp mainTemp">20</span>
      <span className="conversionLinks">
        <a href="/" id="fahrenheitTemp">
          {" "}
          °F
        </a>
      </span>

      <span className="mainTempEmoji">🌤</span>

      <br />
      <span className="lowTemp">L: 10°</span>
    </div>
  );
}
