import React from "react";
import { Link, withRouter } from "react-router-dom";

function Home(props) {
 
 
  return (
    <div className="home">
      <div class="container">
        <h1 class="font-weight-light">Home</h1>
        <ul>
          <li
            class={`nav-item  ${
              props.location.pathname === "/ripple" ? "active" : ""
            }`}
          >
            <Link class="nav-link" to="/ripple">
              Ripple
              <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li
            class={`nav-item  ${
              props.location.pathname === "/messages" ? "active" : ""
            }`}
          >
            <Link class="nav-link" to="/messages">
              Messages
            </Link>
          </li>
          <li
            class={`nav-item  ${
              props.location.pathname === "/animals" ? "active" : ""
            }`}
          >
            <Link class="nav-link" to="/animals">
              Animals
            </Link>
          </li>
          <li
            class={`nav-item  ${
              props.location.pathname === "/dots" ? "active" : ""
            }`}
          >
            <Link class="nav-link" to="/dots">
              Dots
            </Link>
          </li>
          <li
            class={`nav-item  ${
              props.location.pathname === "/ombre" ? "active" : ""
            }`}
          >
            <Link class="nav-link" to="/ombre">
              Ombre
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default withRouter(Home);
