import React from "react";
import "./Birds.css";
import Navigation from "./Navigation";

function Birds() {
  return (
    <div>
      <Navigation />
    <div className="bird-body">
    <div class="container-bird">
	
            <div class="bird-container bird-container--one">
              <div class="bird bird--one"></div>
            </div>
            
            <div class="bird-container bird-container--two">
              <div class="bird bird--two"></div>
            </div>
            
            <div class="bird-container bird-container--three">
              <div class="bird bird--three"></div>
            </div>
            
            <div class="bird-container bird-container--four">
              <div class="bird bird--four"></div>
            </div>
	
    </div> 
    </div>
    </div>
  );
}

export default Birds;
