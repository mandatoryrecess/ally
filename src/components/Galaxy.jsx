import React, { useRef } from 'react'
import { render } from "react-dom";
import { Parallax, ParallaxLayer, IParallax, Background } from 'react-parallax'
import "./Galaxy.css";


  
  function Galaxy() {
    const milkySky = "https://i.imgur.com/tNufwUw.png";
    const darkSky = "https://i.imgur.com/H1bI9fo.png";
    const cartoonStarCluster = "https://i.imgur.com/0xoT3Ky.png";
    const rainbowStar = "https://i.imgur.com/qeOmPc0.png";

    const insideStyles = {
      background: "white",
      padding: 20,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      // overflow: "scroll"
    };

    console.log("Parallax", Parallax)
  

    return(
      <div className="galaxy">
      <Parallax bgImage={ milkySky } strength={500}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>HTML inside the parallax
          </div>
        </div>
      </Parallax>
      <h2>| | |</h2>
      <Parallax bgImage={ darkSky } strength={-100}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Reverse direction</div>
      </div>
    </Parallax>
    <h2>| | |</h2>
      </div>
    );

  };

  export default Galaxy;

