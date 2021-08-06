import React from "react";
import "./Ripple.css";
import Navigation from "./Navigation";

function Ripple() {
  return (
    <div className="sunani">
      <Navigation />

      <div class="sunset">
        <div class="landscape">
          <div class="sun-container">
            <div class="sun"></div>
          </div>
          <div class="cloud"></div>
          <div class="cloud cloud-1"></div>
          <div class="sun-container sun-container-reflection">
            <div class="sun"></div>
          </div>
          <div class="light"></div>
          <div class="light light-1"></div>
          <div class="light light-2"></div>
          <div class="light light-3"></div>
          <div class="light light-4"></div>
          <div class="light light-5"></div>
          <div class="light light-6"></div>
          <div class="light light-7"></div>

          <div class="water"></div>

          <div class="front">
            <div class="stone"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ripple;
