import * as React from "react";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import profileImage from "./images/lucy2.png";
import Contact from "./Contact";
import Certificates from "./Certificates";
import Projects from "./Projects";
import About from "./About";
import linkedin from "./images/linkedin.png";
import gitHub from "./images/github.png";
import email from "./images/email-icon.png";

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
      <Header />
      <main>
        <div className="container">
          <div className="container">
            <div className="row">
              <div className="col col-lg-4">
                <div className="personal-info">
                  <img className="photo" src={profileImage} alt="Lucy Joyce" />
                </div>
              </div>
              <div className="col col-lg-8">
                <h1 className="name">Lucy Joyce</h1>
                <h2 className="headline">
                  Junior Front-End and iOS Developer based in London.
                </h2>
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
                        <img
                          className="home-thumbnail"
                          src={email}
                          alt="Link to email"
                        />
                      </a>
                    </p>
                  </div>
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
