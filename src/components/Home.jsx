import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Home.css";

function Home(props) {
  return (
    <div class="home">
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
          id="scroll-room"
          class={`nav-item  ${
            props.location.pathname === "/scroll" ? "active" : ""
          }`}
          to="/scroll"
        >
        </Link>

        <Link
          id="thought-space"
          class={`nav-item  ${
            props.location.pathname === "/journal" ? "active" : ""
          }`}
          to="/journal"
        >
        </Link>

        <Link
          id="thought-space"
          class={`nav-item  ${
            props.location.pathname === "/audio" ? "active" : ""
          }`}
          to="/audio"
        >
        </Link>

      </div>
    </div>
  );
}

export default withRouter(Home);
