import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import profileImage from "./lucy.png";

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

function About() {
  return (
    <>
      <h1>About Me</h1>
      <nav>
        <Link to="/">Return to Homepage</Link>
      </nav>
    </>
  );
}

function Projects() {
  return (
    <>
      <h1>My Projects</h1>
      <nav>
        <Link to="/">Return to Homepage</Link>
      </nav>
    </>
  );
}

function Certificates() {
  return (
    <>
      <h1>Certificates and Qualifications</h1>
      <nav>
        <Link to="/">Return to Homepage</Link>
      </nav>
    </>
  );
}

function Contact() {
  return (
    <div className="container mt-5">
      <h1>Contact Me</h1>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            required
          ></input>
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            required
          ></input>
        </div>
        <div className="col-md-8">
          <label htmlFor="emailInfo" className="form-label">Email</label>
          <input type="email" className="form-control" id="emailInfo" required></input>
        </div>
        <div className="col-md-4">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input type="text" className="form-control" id="phoneNumber" placeholder="+44"></input>
        </div>
        <div className="col-md-12">
          <label htmlFor="comments" className="form-label">Enquiry</label>
          <textarea className="form-control" id="comments" rows={3} required></textarea>
        </div>
        <div className="col-md-12">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
      <nav>
        <Link to="/">Return to Homepage</Link>
      </nav>
    </div>
  );
}

export default App;
