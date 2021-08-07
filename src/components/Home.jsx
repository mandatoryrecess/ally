import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Home.css";

function Home(props) {
  return (
    <div class="home">
      <div class="blobs">
        <Link
          id="ombre-room"
          class={`nav-item  ${
            props.location.pathname === "/ombre" ? "active" : ""
          }`}
          to="/ombre"
        ></Link>

        {/* NEW ROOM */}

        <Link
          id="line"
          class={`nav-item  ${
            props.location.pathname === "/line" ? "active" : ""
          }`}
          to="/line"
        ></Link>

        {/* NEW ROOM */}
        <Link
          id="light"
          class={`nav-item  ${
            props.location.pathname === "/light" ? "active" : ""
          }`}
          to="/light"
        ></Link>

        <Link
          id="ripple-room"
          class={`nav-item  ${
            props.location.pathname === "/ripple" ? "active" : ""
          }`}
          to="/ripple"
        ></Link>

        <Link
          id="messages-room"
          class={`nav-item  ${
            props.location.pathname === "/messages" ? "active" : ""
          }`}
          to="/messages"
        ></Link>

        <Link
          id="animals-room"
          class={`nav-item  ${
            props.location.pathname === "/animals" ? "active" : ""
          }`}
          to="/animals"
        ></Link>

        <Link
          id="dots-room"
          class={`nav-item  ${
            props.location.pathname === "/light" ? "active" : ""
          }`}
          to="/light"
        ></Link>

        <Link
          id="thought-space"
          class={`nav-item  ${
            props.location.pathname === "/journal" ? "active" : ""
          }`}
          to="/journal"
        ></Link>

        <Link
          id="fire-room"
          class={`nav-item  ${
            props.location.pathname === "/audio" ? "active" : ""
          }`}
          to="/audio"
        ></Link>

        {/* NEW ROOM */}

        <Link
          id="galaxy-room2"
          class={`nav-item  ${
            props.location.pathname === "/galaxy" ? "active" : ""
          }`}
          to="/galaxy"
        ></Link>

        <Link
          id="rain-room"
          class={`nav-item  ${
            props.location.pathname === "/rain" ? "active" : ""
          }`}
          to="/rain"
        ></Link>

        <Link
          id="galaxy-room"
          class={`nav-item  ${
            props.location.pathname === "/galaxy" ? "active" : ""
          }`}
          to="/galaxy"
        ></Link>


        <Link
          id="ripple-room2"
          class={`nav-item  ${
            props.location.pathname === "/ball" ? "active" : ""
          }`}
          to="/ball"
        ></Link>

      </div>
    </div>
  );
}

export default withRouter(Home);
