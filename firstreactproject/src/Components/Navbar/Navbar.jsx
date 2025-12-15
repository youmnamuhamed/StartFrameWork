import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top ">
      <div className="container">
        <Link
          className="navbar-brand text-white text-uppercase fw-bolder fs-2"
          to=""
        >
          Start Framework
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <NavLink
                className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"
                to="About"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink
                className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"
                to="Portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink
                className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"
                to="Contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
