import * as React from "react";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import profileImage from "./images/me.png";
import Contact from "./Contact";
import Certificates from "./Certificates";
import Projects from "./Projects";
import About from "./About";
import Links from "./Links";

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
          <div className="row">
            <div className="col col-lg-4">
              <div className="personal-info">
                <img className="photo" src={profileImage} alt="Lucy Joyce" />
              </div>
            </div>
            <div className="col col-lg-8">
              <h1 className="name">Lucy Joyce</h1>
              <h2 className="headline">
                Junior Software Developer based in London.
              </h2>
              <Links />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
