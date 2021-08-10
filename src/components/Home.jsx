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
        >ombre</Link>

        {/* NEW ROOM */}

        <Link
          id="line"
          class={`nav-item  ${
            props.location.pathname === "/line" ? "active" : ""
          }`}
          to="/line"
        >LINE</Link>

        {/* NEW ROOM */}
        <Link
          id="light"
          class={`nav-item  ${
            props.location.pathname === "/light" ? "active" : ""
          }`}
          to="/light"
        >light</Link>

        <Link
          id="moonrise-room"
          class={`nav-item  ${
            props.location.pathname === "/moonrise" ? "active" : ""
          }`}
          to="/moonrise"
        >moonrise</Link>

        <Link
          id="messages-room"
          class={`nav-item  ${
            props.location.pathname === "/messages" ? "active" : ""
          }`}
          to="/messages"
        >messages</Link>

        <Link
          id="animals-room"
          class={`nav-item  ${
            props.location.pathname === "/animals" ? "active" : ""
          }`}
          to="/animals"
        >animals</Link>

        <Link
          id="birds-room"
          class={`nav-item  ${
            props.location.pathname === "/birds" ? "active" : ""
          }`}
          to="/birds"
        >birds</Link>

        <Link
          id="thought-space"
          class={`nav-item  ${
            props.location.pathname === "/stones" ? "active" : ""
          }`}
          to="/stones"
        >Stones</Link>

        <Link
          id="fire-room"
          class={`nav-item  ${
            props.location.pathname === "/audio" ? "active" : ""
          }`}
          to="/audio"
        >audio</Link>

        {/* NEW ROOM */}

        <Link
          id="galaxy-room2"
          class={`nav-item  ${
            props.location.pathname === "/audio" ? "active" : ""
          }`}
          to="/audio"
        >Audio</Link>

        <Link
          id="rain-room"
          class={`nav-item  ${
            props.location.pathname === "/rain" ? "active" : ""
          }`}
          to="/rain"
        >rain</Link>

        <Link
          id="galaxy-room"
          class={`nav-item  ${
            props.location.pathname === "/light" ? "active" : ""
          }`}
          to="/light"
        >Light</Link>


        <Link
          id="stones-room"
          class={`nav-item  ${
            props.location.pathname === "/stones" ? "active" : ""
          }`}
          to="/stones"
        >stones</Link>

      </div>
    </div>
  );
}

export default withRouter(Home);
