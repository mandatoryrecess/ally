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
          to="/"
          style={{ border:'none' }}
        ><img alt="" width="30px" src="/img/012-house.png"/></Link>
      </div>
      {/* </nav> */}
    </div>
  );
}

export default withRouter(Navigation);
