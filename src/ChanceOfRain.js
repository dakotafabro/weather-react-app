import React from "react";
import "./ChanceOfRain.css";

export default function ChanceOfRain() {
  return (
    <div className="ChanceOfRain">
      <ul className="ChanceOfRain">
        <li id="feels-like">Feels Like: --</li>
        <li id="windSpeed">Wind: --</li>
        <li id="humidity">Humidity: --</li>
      </ul>
    </div>
  );
}
