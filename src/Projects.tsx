import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function Projects() {
    return (
      <div>
      <div className="container-fluid">
        <div className="NavigationItems">
          <div className="row">
            <div className="col">
              <nav>
                <div className="d-block p-2 bg-light text-white">
                  <Link to="/">Homepage</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
        <h1>My Projects</h1>
      </div>
    );
  }