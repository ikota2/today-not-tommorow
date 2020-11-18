import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
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
// const currentPath = document.location.pathname;
export function Main() {
  console.log(document.location.pathname);
  return (
    <BrowserRouter>
      <div className="main">
        <nav>
          <div className="main__nav_link">
            <Link
              to="/"
              style={
                document.location.pathname === "/"
                  ? linkStyle
                  : defaultLinkStyle
              }
            >
              tasks
            </Link>
          </div>
          <div className="main__nav_link">
            <Link
              to="/stats"
              style={
                document.location.pathname === "/stats"
                  ? linkStyle
                  : defaultLinkStyle
              }
            >
              stats
            </Link>
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
