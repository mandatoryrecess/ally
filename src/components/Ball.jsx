import React, { useRef } from 'react'
import "./Ball.css";
import Navigation from "./Navigation";
import useSound from 'use-sound';
import WaterDrop from "./sound/WaterDrop.mp3";
import WaterDropLow from "./sound/WaterDropLow.mp3";
import WaterBloop1 from "./sound/WaterBloop1.mp3"
import WaterBloop2 from "./sound/WaterBloop2.mp3"

function Ball() {

  const [play] = useSound(WaterDrop);
  const [play2] = useSound(WaterDropLow);
  const [play3] = useSound(WaterBloop1);
  const [play4] = useSound(WaterBloop2);
  
  function handleClickStone1(e) {
    e.preventDefault(); 
    play();
    console.log('clicked1')
    e.target.id = "splash-1";
  }
  
  function handleClickStone2(e) {
    e.preventDefault(); 
    play2();
    console.log('clicked2')
    e.target.id = "splash-2";
  }
  
  function handleClickStone3(e) {
    e.preventDefault(); 
    play3();
    console.log('clicked3')
    e.target.id = "splash-3";
  }
  
  function handleClickStone4(e) {
    e.preventDefault(); 
    play4();
    console.log('clicked1')
    e.target.id = "splash-1";
  }

  return (
    <div>
      <Navigation />
      <div class="ball-body">
      <span class="stone-1" onClick={handleClickStone1}></span>
      <span class="stone-2" onClick={handleClickStone2}></span>
      <span class="stone-3" onClick={handleClickStone3}></span>
      <span class="stone-1" onClick={handleClickStone4}></span>
   
           
      </div>

    </div>
  );
}

export default Ball;
