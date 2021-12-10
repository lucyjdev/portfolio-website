import * as React from "react";
import { Link } from "react-router-dom";

export default function About() {
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
      <h1>About Me</h1>
    </div>
  );
}
