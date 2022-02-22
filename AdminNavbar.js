import "./style.css";
import React from "react";
import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AdminNavbar(props) {
  const { setNavbarClick } = props;
  function handleSidebar() {
    setSideBar(!sideBar);
  }
  const [sideBar, setSideBar] = useState(true);

  return (
    <div>
      <div className="navContainer">
        <nav>
          <ul
            className="mainNav"
            style={sideBar ? { transform: "translateX(0)" } : null}
          >
            <li>
              <NavLink
                className="mainNavLink"
                to="/admin"
                onClick={() => setNavbarClick("exercises")}
              >
                Exercises
              </NavLink>
            </li>
            <li>
              <NavLink
                className="mainNavLink"
                to="/admin"
                onClick={() => setNavbarClick("statistics")}
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                className="mainNavLink"
                to="/admin"
                onClick={() => setNavbarClick("users")}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <button
          onClick={handleSidebar}
          className={`navToggle ${sideBar ? "open" : null}`}
        >
          <span />
          <span />
          <span />
        </button>
        <div
          onClick={handleSidebar}
          className={`overlay ${sideBar ? "open" : ""}`}
        />
      </div>
      {/* </header> */}
      <div className="wrapper"></div>
    </div>
  );
}
