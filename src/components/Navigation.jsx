import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand">
        <div class="container">
          <Link class="navbar-brand" to="/">
            ALLY
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
