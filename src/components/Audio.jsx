import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Audio.css";
import Navigation from "./Navigation";

export default function Audio() {
  return (
    <div>
      <Navigation />
    <div class="campfire">
      <ReactAudioPlayer
        className="audio"
        src="sounds/campfire.mp3"
        autoPlay="true"
        controls
        loop="true"
      />{" "}
    </div>
    </div>
  );
}
