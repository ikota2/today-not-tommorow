import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import "./main.css";
// import { Calendar } from "../Calendar/calendar";
import { Stats } from "../Stats/stats";
import { Tasks } from "../Tasks/tasks";
// import { dom } from "@fortawesome/fontawesome-svg-core";

const linkStyle = {
  textDecoration: "none",
};
const defaultLinkStyle = {
  textDecoration: "underline",
};
// const linkStyle = {
//   link:active ????
// }
export function Main() {
  console.log(document.location.pathname);
  return (
    <BrowserRouter>
      <div className="main">
        <nav>
          <div className="main__nav_link">
            <NavLink
              className="homeLink"
              activeClassName="homeLink_active"
              to="/"
              exact
              // style={
              //   document.location.pathname === "/"
              //     ? linkStyle
              //     : defaultLinkStyle
              // }
            >
              tasks
            </NavLink>
          </div>
          <div className="main__nav_link">
            <NavLink
              className="homeLink"
              activeClassName="homeLink_active"
              to="/stats"
              // style={
              //   document.location.pathname === "/stats"
              //     ? linkStyle
              //     : defaultLinkStyle
              // }
            >
              stats
            </NavLink>
          </div>
        </nav>
        <Route path="/" exact>
          <Tasks />
        </Route>

        <Route path="/stats">
          <Stats />
        </Route>
      </div>
    </BrowserRouter>
  );
}
