import React from "react";
import './Ripple.css';

function Ripple() {
  return (

    <div class="container">
    <div class="landscape">

    <div class="sun-container">
      <div class="sun"></div>
    </div>
    <div class="cloud"></div>
    <div class="cloud cloud-1"></div>
    <div class="sun-container sun-container-reflection">
      <div class="sun"></div>
    </div>
    <div class="light"></div>
    <div class="light light-1"></div>
    <div class="light light-2"></div>
    <div class="light light-3"></div>
    <div class="light light-4"></div>
    <div class="light light-5"></div>
    <div class="light light-6"></div>
    <div class="light light-7"></div>
    <div class="water"></div>

    <div class="splash splash-4 delay-4"></div>
     <div class="splash splash-stone delay-3"></div>
 
    <div class="front">
      <div class="stone"></div>
      <div class="grass"></div>
      <div class="grass grass-1"></div>
   
      <div class="reed reed-1"></div>
      
    </div>
  </div>
  </div>
  );
}

export default Ripple;
