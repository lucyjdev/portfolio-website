import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light rounded-3">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="#navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                My Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/certificates">
                Certificates
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
