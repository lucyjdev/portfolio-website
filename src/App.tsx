import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import profileImage from "./lucy.png";
import Contact from "./Contact";
import Certificates from "./Certificates";
import Projects from "./Projects";
import About from "./About";
import Navigation from "./Navigation";

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
          <div className="container-fluid">
            <div className="row">
              <div className="col-4">
                <div className="PersonalInfo">
                  <img className="Photo" src={profileImage} alt="Lucy Joyce" />
                </div>
              </div>
              <div className="col-8">
                <h2 className="About">Lucy Joyce</h2>
                <div className="info-para">
                  <p>I am a web and iOS developer from London.</p>
                  <p>
                    Please check out my story under the 'About Me' tab, my
                    projects under the 'My Projects' tab and my certificates
                    under the 'Certificates' tab. To get in contact, please use
                    the details below or the contact form under the 'Contact Me'
                    tab above.
                  </p>
                  <p>
                    Lucy Joyce on{" "}
                    <a href="https://www.linkedin.com/in/lucy-joyce-597485166/">
                      Linkedin
                    </a>
                  </p>
                  <p>
                    Lucy Joyce on{" "}
                    <a href="https://github.com/lucyj204">GitHub</a>
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
