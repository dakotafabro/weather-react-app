import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="citySearchBar" autocomplete="off">
        <span>
          <input
            className="searchCity"
            type="text"
            placeholder="Enter a city"
          />
        </span>
        <input className="searchButton" type="submit" value="Search" />
        <button className="currentCityButton">Current</button>
      </form>
    </div>
  );
}
