import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
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
        <div className="container-fluid">
          <div className="NavigationItems">
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
                    <Link to="/certificates">
                      Certificates and Qualifications
                    </Link>
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
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-4">
                <div className="PersonalInfo">
                  <img className="Photo" src={profileImage} alt="Lucy Joyce" />
                </div>
              </div>
              <div className="col-8">
                <h2 className="About">Lucy Joyce</h2>
                <p>Write something here</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}


export default App;
