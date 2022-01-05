import * as React from "react";

export default function Projects() {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
        </nav>
      </div>
      <h1 className="title">My Projects</h1>
      <h3>SheCodes Basics Project</h3>
      <p>
        I completed this landing page for the final project for the SheCodes
        Basics workshop using HTML/ CSS and JavaScript. This was my first test
        of using skills learned over two weeks in the SheCodes workshop. For
        more information on the workshop and to view my certificate check out
        the 'Certificates' section above.
      </p>
      <p>
        As I had not been introduced to GitHub at the start of my coding
        journey, I have not provided a link to the source code however the
        following link will take you to the landing page that I created. Please
        click on the link to find a festival and check out the changes depending
        on the continent that you provide.
      </p>
      <p>
        <a href="file:///Users/lucyjoyce/lucyj/OneDrive/Desktop/SheCodes/Homework/drum-and-bass.html">
          Landing page
        </a>
      </p>
      <h3>SheCodes Plus Project</h3>
      <p>
        I moved on to SheCodes Plus following the basics workshop. This workshop
        was more extensive than the basics workshop and I completed many mini
        projects for homework assignments each week. My final project for this
        workshop involved building a weather app using JavaScript. AJAX... I
        used the API from OpenWeatherMap to provide live data for searched
        cities and provide 3 hour forecast data. Check out the link to the
        source code below.{" "}
      </p>
      <a href="https://github.com/lucyj204/weather-app-project">
        View source code for my Weather App Project
      </a>
      <h3>SheCodes React Project</h3>
      
    </div>
  );
}
