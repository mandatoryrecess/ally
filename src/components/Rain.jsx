import React from "react";
import './Rain.css'
import ReactAudioPlayer from "react-audio-player";
import './Audio.css';



function Rain() {
  
 
        

  return (
    <section>
   
    <ReactAudioPlayer className="audio" src="sounds/The-sound-of-rain-on-a-tin-roof.mp3" autoPlay="true" controls loop="true"/>{" "}
 
    </section>
 
  );
}

export default Rain;
