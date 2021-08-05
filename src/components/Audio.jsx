import React from "react";
import ReactAudioPlayer from "react-audio-player";
import './Audio.css';

export default function Audio() {
  return (
    <div class="campfire">
      <ReactAudioPlayer className="audio" src="sounds/campfire.mp3" autoPlay="true" controls loop="true"/>{" "}
    </div>
  );
}
