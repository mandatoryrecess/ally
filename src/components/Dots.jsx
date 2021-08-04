import React from "react";
import * as d3 from "d3";

function Dots() {

  const svg = () => {
    return (
      <svg style={{
        border: "2px solid gold"
      }} />
    )
  }
  
  return (
    <div className="Dots">
      <div class="container">{svg}</div>
    </div>
  );
}

export default Dots;
