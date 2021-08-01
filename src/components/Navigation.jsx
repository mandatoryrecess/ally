import React from "react";
import { Link, withRouter } from "react-router-dom";
import './Navigation.css';

function Navigation(props) {
  return (
    <div className="navigation">
      {/* <nav class="navbar navbar-expand"> */}
      <div class="container">
        <Link
          className="return-home"
          class="fas fa-arrow-circle-left"
          to="/"
          style={{ border:'none' }}
        ></Link>
      </div>
      {/* </nav> */}
    </div>
  );
}

export default withRouter(Navigation);
