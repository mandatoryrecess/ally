import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import "./Rainbow.css";

function Rainbow() {
  const rainbowStar = "https://i.imgur.com/qeOmPc0.png";

  return(
    <Parallax y={[-20, 20]} tagOuter="figure">
      <img class="rainbow-star" src={ rainbowStar } />
    </Parallax>
  );

}

export default Rainbow;