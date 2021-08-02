import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Home.css";

function Home(props) {
  return (
    <div class="container">
      <div class="blobs">
        {/* <h1 class="font-weight-light">Home</h1> */}
        <Link
          id="ombre-room"
          class={`nav-item  ${
            props.location.pathname === "/ombre" ? "active" : ""
          }`}
          to="/ombre"
        ></Link>

        <Link
          id="ripple-room"
          class={`nav-item  ${
            props.location.pathname === "/ripple" ? "active" : ""
          }`}
          to="/ripple"
        >
          <span class="sr-only">(current)</span>
        </Link>

        <Link
          id="messages-room"
          class={`nav-item  ${
            props.location.pathname === "/messages" ? "active" : ""
          }`}
          to="/messages"
        >
        </Link>

        <Link
          id="animals-room"
          class={`nav-item  ${
            props.location.pathname === "/animals" ? "active" : ""
          }`}
          to="/animals"
        >
        </Link>

        <Link
          id="dots-room"
          class={`nav-item  ${
            props.location.pathname === "/dots" ? "active" : ""
          }`}
          to="/dots"
        >
        </Link>

        <Link
          id="thought-space"
          class={`nav-item  ${
            props.location.pathname === "/thought" ? "active" : ""
          }`}
          to="/thought"
        >
        </Link>

      </div>
    </div>
  );
}

export default withRouter(Home);
