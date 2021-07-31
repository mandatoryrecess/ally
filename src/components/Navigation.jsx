import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            ALLY
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/ripple" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/ripple">
                  Ripple
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
      </nav>
    </div>
  );
}

export default withRouter(Navigation);