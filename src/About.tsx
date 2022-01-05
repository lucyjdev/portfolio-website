import * as React from "react";


export default function About() {
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
                <a className="nav-link" href="/contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <h1 className="title">About Me</h1>
          <div className="info-para">
          <p>Thanks for checking out my site!</p>
          <p>
            As a bit about me, I was first introduced to programming during
            furlough in 2020. I was trying to step out of my comfort zone whilst
            I had the opportunity and wanted to learn something new. I started
            with a free Python course offered as part of a government scheme and
            whilst I was doing this saw an advert on Facebook for a free online
            workshop with a company called SheCodes. After attending the
            workshop, I couldn't wait to start learning. Six months on and I had completed
            the SheCodes beginner workshop, SheCodes Plus workshop and SheCodes
            React workshop. Links to my certificates and final projects can be
            found on the links at the top of this page, and further information
            on the workshops and course content can be found{" "}
            <a href="https://www.shecodes.io/">here</a>.
          </p>
          <p>
            After I completed the SheCodes workshops in January 2021, I
            continued to work in my role of Customer Success Manager and started
            to explore Swift Playgrounds. I decided to start an iOS App
            Development Bootcamp on Udemy in April 2021 and left my role in July
            to focus on further developing my skills. This bootcamp has been a
            great introduction to iOS app development and I had experience
            building over 20 apps as part of this course.{" "}
          </p>
          {/* <p>
            I am now in the process of developing my own iOS app which has been
            a huge learning experience. I am also building my own backend
            service for my app in Typescript, which has allowed me to….
          </p> */}
          <p>
            I’m looking for an opportunity to join a team and further my
            experience and passion for web and app development and am excited
            about my journey still to come.
          </p>
          <p>
            Please take a look at my projects to date and use the form on the
            ‘Contact Me’ tab to get in touch 😀.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
