// import React from "react";
// // import './Rain.css'
// import ReactRain from 'react-rain-animation';
// import "react-rain-animation/lib/style.css";



// function Rain() {
  
 
        

//   return (
 
//       <ReactRain
//           numDrops="900"
//         />
 
//   );
// }

// export default Rain;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rain extends Component {
  startRain() {
    const rainSection = document.getElementById('Rain');

    for(let i = 1; i < this.props.numDrops; i++) {
      const dropLeft = this.randRange(0, 1600);
      const dropTop = this.randRange(-1000, 1400);

      const drop = document.createElement('div');

      drop.setAttribute('class', 'drop');
      drop.setAttribute('id', `drop${i}`);

      rainSection.appendChild(drop);

      drop.style.left = `${dropLeft}px`;
      drop.style.top = `${dropTop}px`;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.numDrops !== prevProps.numDrops) {
      this.stopRain();
      this.startRain()
    }
  }

  stopRain() {
    const rainSection = document.getElementById('Rain');

    while(rainSection.hasChildNodes()) {
      rainSection.removeChild(rainSection.lastChild);
    }
  }

  randRange(minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  }

  componentDidMount() {
    this.startRain();
  }

  render() {
    return (
      <div id="Rain"/>
    );
  }
}

Rain.propTypes = {
  numDrops: PropTypes.number.isRequired
};

export default Rain;