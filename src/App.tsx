import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import profileImage from "./lucy.png";
import profileImage2 from "./lucyjoyce.png";
import Contact from "./Contact";
import Certificates from "./Certificates";
import Projects from "./Projects";
import About from "./About";
import Navigation from "./Navigation";
import linkedin from "./images/linkedin.png";
import gitHub from "./images/github.png";


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
          <Navigation />
          <div className="container">
            <div className="row">
              <div className="col col-lg-4">
                <div className="PersonalInfo">
                  <img className="Photo" src={profileImage2} alt="Lucy Joyce" />
                </div>
              </div>
              <div className="col col-lg-8">
                <h3 className="Name">Lucy Joyce</h3>
                <div className="About">
                  <h5 className="Headline">
                    Junior Front-End and iOS Developer based in London.
                  </h5>
                  <h4 className="Website-info">
                    Please explore my website using the navigation above and
                    check out my LinkedIn and GitHub profiles below.
                  </h4>

                  <div className="row">
                    <div className="col col-lg-1">
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
                    <div className="col col-lg-1">
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
                  </div>
                  <p className="email">
                    Email me at <i>lucy@lucyjoyce.dev</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
