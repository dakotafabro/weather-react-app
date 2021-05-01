import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <strong>
        <a
          href="https://github.com/dakotafabro/Weather-App-SheCodes"
          className="openSourceLink"
        >
          Open-source code
        </a>{" "}
        by{" "}
        <a
          href="https://dakotafabro.netlify.app/"
          title="Dakota Fabro's portfolio"
          className="openSourceLink"
        >
          Dakota Fabro
        </a>{" "}
        🇵🇭
      </strong>
      <script src="src/index.js" />
    </div>
  );
}
