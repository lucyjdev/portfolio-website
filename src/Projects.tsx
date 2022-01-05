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
      <div className="container">
        <h1 className="title">My Projects</h1>
        <div className="info-para">
          <h2 className="project-language">
            JavaScript, TypeScript and React Projects
          </h2>
          <h3 className="project-title">SheCodes Basics Project</h3>
          <p className="project-detail">
            I completed this landing page for the final project for the SheCodes
            Basics workshop using HTML/ CSS and JavaScript. This was my first
            test of using skills learned over two weeks in the SheCodes
            workshop. For more information on the workshop and to view my
            certificate check out the 'Certificates' section above.
          </p>
          <p className="project-detail">
            As I had not been introduced to GitHub at the start of my coding
            journey, I have not provided a link to the source code however the
            following link will take you to the landing page that I created.{" "}
            <b>
              Please click on the link to find a festival and check out the
              changes depending on the continent that you provide.
            </b>
          </p>
          <h3 className="project-title">SheCodes Plus Project</h3>
          <p className="project-detail">
            I moved on to SheCodes Plus following the basics workshop. This
            workshop was more extensive than the basics workshop and covered
            more advanced topics of Javascript, HTML and CSS. My final project
            for this workshop involved building a weather app using JavaScript.
            I used AJAX to connect with the API from OpenWeatherMap to provide
            live data for searched cities and provide 3 hour forecast data.
            Check out the link to the source code below.{" "}
          </p>
          <a
            className="project-detail"
            href="https://github.com/lucyj204/weather-app-project"
          >
            View source code for my Weather App Project
          </a>
          <h3 className="project-title">SheCodes React Project</h3>
          <p className="project-detail"></p>
          <h3 className="project-title">My Portfolio Website</h3>
          <p className="project-detail">
            I decided to build this website using React and Typescript to
            refresh my knowledge. To view the source code for the website please
            follow the link below.
          </p>
          <a
            className="project-detail"
            href="https://github.com/lucyj204/portfolio-website"
          >
            Link to source code for my website
          </a>

          <h2 className="project-language">Top iOS Projects</h2>
          <h3 className="project-title">Commingle</h3>
          <p className="project-detail">
            Commingle is the name I came up with for my creation of a group
            events calendar. This project is a work in progress and has been a
            great way for me to expand on what I have learned in the iOS
            Development Bootcamp course. The idea is that you will login to your
            account and have a list of groups that you are a part of, similar to
            WhatsApp. For example, you may have a London group or a family
            group. Once in the group you will have a shared calendar for events
            that anyone can add, keeping everything that's happening in one
            central place. Once in the event you will be able to add further
            details, join the event chat or add shopping or to-get lists for the
            event. The aim is to keep discussions about an event in one central
            place.
          </p>
          <p className="project-detail">
            I started this project as I knew it was going to be challenging, and
            involve implementing features that I hadn't yet come across.
            Although I have a huge amount more to do on the app, I have used
            external libraries to implement the calendar, store login data and
            store data. As I started to think more about the way that the app
            would work, my way of storing data was not going to be suitable so I
            started to build my own backend service in Typescript which has been
            a steep learning curve and something I have really enjoyed working
            on. I have included links below to the source code so far for both
            my backend service and the Swift code for the app itself below.
          </p>
          <a
            className="project-detail"
            href="https://github.com/lucyj204/GroupEventsCalendar"
          >
            Link to Swift source code for Commingle
          </a>
          <br />
          <a
            className="project-detail"
            href="https://github.com/lucyj204/GroupEventsCalendarBackend"
          >
            Link to Typescript backend source code for Commingle
          </a>
          <h3 className="project-title">Timer App</h3>
          <p className="project-detail"> </p>
          <h3 className="project-title">AR Pokemon 3D</h3>
          <p className="project-detail"></p>
        </div>
      </div>
    </div>
  );
}
