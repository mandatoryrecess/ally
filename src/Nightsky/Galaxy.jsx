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
      <>
      <div class="margin"></div>
      <section class="background">
        <div class="foreground">
          <img src="https://i.imgur.com/qeOmPc0.png" alt=""/>
        </div>
      </section>
      <div class="margin"></div>
      </>
    );

  };

  export default Galaxy;
