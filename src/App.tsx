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
                  <h1 className="Name">Lucy Joyce</h1>
                  <img className="Photo" src={profileImage} alt="Lucy Joyce" />
                </div>
              </div>
              <div className="col-8">
                <h2 className="About">Lucy Joyce</h2>
                <p>
                  I was first introduced to programming during furlough in 2020.
                  I was trying to step out of my comfort zone whilst I had the
                  opportunity and wanted to learn something new. I started with
                  a free Python course offered as part of a government scheme
                  and whilst I was doing this saw an advert on Facebook for a
                  free online workshop with a company called SheCodes. After
                  attending the workshop, I wanted to know more. Six months on
                  and I had completed the SheCodes beginner workshop, SheCodes
                  Plus workshop and SheCodes React workshop. Links to my
                  certificates and final projects can be found on the links at
                  the top of this page.
                </p>
                <p>
                  I enjoyed programming so much but was still working in my role
                  in Customer Success and has been asked to complete a Teaching
                  and Training course as part of my role, so I took a break for
                  a few months. On the weekends I started to explore Swift
                  Playgrounds on my Mac, which I found really fun. In April, I
                  handed in my notice for my previous job and decided to focus
                  full time on programming. Following the enjoyment from Swift
                  Playgrounds and my love of apps, I started an iOS App
                  Development Bootcamp on Udemy. This course has been a great
                  introduction to iOS app development and I had experience
                  building over 20 apps as part of this course.
                </p>
                <p>
                  I am now in the process of developing my own iOS app which has
                  been a huge learning experience. I am also building my own
                  backend service for my app in Typescript.
                </p>
                <p>
                  I’m looking for an opportunity to join a team and further my
                  experience and passion for web and app development and am
                  excited about my journey still to come.
                </p>
                <p>
                  Please take a look at my projects to date and use the details
                  on the ‘Contact Me’ tab to get in touch 😀.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
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
    <>
      <h1>Contact Me</h1>
      <nav>
        <Link to="/">Return to Homepage</Link>
      </nav>
    </>
  );
}

export default App;
