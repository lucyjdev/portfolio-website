import * as React from "react";
import email from "./images/email-icon.png";
import linkedin from "./images/linkedin.png";
import gitHub from "./images/github.png";

export default function Footer() {
  return (
    <div className="navbar-static-bottom" id="footer">
      <div className="footer">
        <div className="row">
          <div className="col">
            <p>
              <a href="https://www.linkedin.com/in/lucy-joyce-597485166/">
                <img
                  className="thumbnail"
                  src={linkedin}
                  alt="Link to LinkedIn profile"
                />
              </a>
            </p>
          </div>
          <div className="col">
            <p>
              <a href="https://github.com/lucyj204">
                <img
                  className="thumbnail"
                  src={gitHub}
                  alt="Link to GitHub profile"
                />
              </a>
            </p>
          </div>
          <div className="col">
            <p>
              <a href="mailto:lucy@lucyjoyce.dev">
                <img className="thumbnail" src={email} alt="Link to email" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
