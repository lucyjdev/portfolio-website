import linkedin from "./images/linkedin.png";
import gitHub from "./images/github.png";
import email from "./images/email-icon.png";

export default function Links() {
  return (
    <div className="social-links">
      <div className="row">
        <div className="col">
          <p>
            <a href="https://www.linkedin.com/in/lucy-joyce-597485166/">
              <img
                className="home-thumbnail"
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
                className="home-thumbnail"
                src={gitHub}
                alt="Link to GitHub profile"
              />
            </a>
          </p>
        </div>
        <div className="col">
          <p>
            <a href="mailto:lucy@lucyjoyce.dev">
              <img className="home-thumbnail" src={email} alt="Link to email" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
