import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Scroll.css";

function Scroll() {
  return (
    <div className="scrolling">
      <Parallax pages={2}>
        <ParallaxLayer
          offset={0}
          speed={1.5}
          // style={{
          //   display: "flex",
          //   justifyContent: "stretch",
          //   alignItems: "stretch",
          // }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={2}
          style={{ backgroundColor: "#ff6d6d" }}
        />

        <ParallaxLayer
          offset={1.5}
          speed={1}
          // style={{
          //   display: "flex",
          //   justifyContent: "stretch",
          //   alignItems: "stretch",
          //   color: "white",
          // }}
        ></ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Scroll;
