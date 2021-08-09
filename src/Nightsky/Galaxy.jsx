import React from 'react'
// import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
// import Rainbow from './Rainbow';
import "./Galaxy.css";


  
  function Galaxy() {
    const milkySky = "https://i.imgur.com/tNufwUw.png";
    const darkSky = "https://i.imgur.com/H1bI9fo.png";
    const cartoonStarCluster = "https://i.imgur.com/0xoT3Ky.png";
    const rainbowStar = "https://i.imgur.com/qeOmPc0.png";

    return(
      <div
      className="scroll-test"
      style={{
        height: "100vh", // try 100% here
        width: "100vw",
        overflowY: "scroll",
        zIndex: 1,
        top: 0,
        left: 0,
      }}
    >
      <img src="https://i.imgur.com/u9QduVC.png" />
    </div>
    );

  };

  export default Galaxy;

