import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import profileImage from "./lucy.png";
import Contact from "./Contact";
import Certificates from "./Certificates";
import Projects from "./Projects";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">
                      About Me
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/projects">
                      My Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/certificates">
                      Certificates
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">
                      Contact Me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* <div className="NavigationItems">
            <div className="row">
              <div className="col">
                <nav>
                  <div className="d-block p-2 bg-light text-white">
                    <Link to="/about">About Me</Link>
                  </div>
                </nav>
              </div>
              <div className="col">
                <nav>
                  <div className="d-block p-2 bg-light text-white">
                    <Link to="/projects">My Projects</Link>
                  </div>
                </nav>
              </div>
              <div className="col">
                <nav>
                  <div className="d-block p-2 bg-light text-white">
                    <Link to="/certificates">Certificates</Link>
                  </div>
                </nav>
              </div>
              <div className="col">
                <nav>
                  <div className="d-block p-2 bg-light text-white">
                    <Link to="/contact">Contact Me</Link>
                  </div>
                </nav>
              </div>
            </div>
          </div> */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-4">
                <div className="PersonalInfo">
                  <img className="Photo" src={profileImage} alt="Lucy Joyce" />
                </div>
              </div>
              <div className="col-8">
                <h2 className="About">Lucy Joyce</h2>
                <p>I am a web and iOS developer from London.</p>
                <p>
                  Please check out my story under the 'About Me' section, my
                  projects in 'My Projects' section and my certificates in the
                  'Certificates' section. To get in contact, please use the
                  details below or the contact form under the 'Contact Me'
                  section above.
                </p>
                <p>
                  Lucy Joyce on{" "}
                  <a href="https://www.linkedin.com/in/lucy-joyce-597485166/">
                    Linkedin
                  </a>
                </p>
                <p>
                  Lucy Joyce on <a href="https://github.com/lucyj204">GitHub</a>
                </p>
                <p>Email me at lucyj20490@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
