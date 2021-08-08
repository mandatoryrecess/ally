import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import "./Rainbow.css";

function Rainbow() {
  const rainbowStar = "https://i.imgur.com/qeOmPc0.png";

  return(
    <Parallax y={[-20, 20]} tagOuter="figure">
      <img alt="" src={ rainbowStar } class="rainbow-star" transform="translate3d(0%, -106.305%, 0px)"/>
    </Parallax>
  );

}

export default Rainbow;