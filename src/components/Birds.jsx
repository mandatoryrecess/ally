import React, { useState } from "react";
import "./Birds.css";
import Navigation from "./Navigation";
import useSound from "use-sound";
import BlackCrows from "./sound/BlackCrows.mp3";

function Birds() {
  const [play] = useSound(BlackCrows);

  return (
    <div>
      <Navigation />
      <div className="bird-body">
        <div class="container-bird" onClick={play}>
          <div class="bird-container bird-container--one">
            <div class="bird bird--one"></div>
          </div>

          <div class="bird-container bird-container--two">
            <div class="bird bird--two"></div>
          </div>

          <div class="bird-container bird-container--three">
            <div class="bird bird--three"></div>
          </div>

          <div class="bird-container bird-container--four">
            <div class="bird bird--four"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Birds;
