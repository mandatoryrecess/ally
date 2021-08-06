import React from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import "./Galaxy.css";


  
  function Galaxy() {
    const milkySky = "https://i.imgur.com/tNufwUw.png";
    const darkSky = "https://i.imgur.com/H1bI9fo.png";
    const cartoonStarCluster = "https://i.imgur.com/0xoT3Ky.png";
    const rainbowStar = "https://i.imgur.com/qeOmPc0.png";

    return(
      <ParallaxProvider>
      <div class="galaxy">
        <h1 class="h1">Galaxy</h1>
        <h1 class="h1">Galaxy</h1>
        <h1 class="h1">Galaxy</h1>
      </div>
      </ParallaxProvider>
    );

  };

  export default Galaxy;

