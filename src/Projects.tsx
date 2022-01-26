import * as React from "react";
import Navigation from "./Navigation";
import eeveeOddish from "./images/eevee-oddish.png";
// import dnbpage from "./images/dnb-page.png";
// import dnbpage2 from "./images/dnb-page2.png";
import commingleLogo from "./images/Commingle.png";
import reactWeather from "./images/react-weather-app.png";
import weatherApp from "./images/weather-app.png";
import gitHub from "./images/github.png";
import netlifyLogo from "./images/netlify-logo.png";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export default function Projects() {
  return (
    <div>
      <Navigation />
      <div className="container">
        <h1 className="title">My Projects</h1>
        <h2 className="project-language">Front-End Projects</h2>
        <CardGroup>
          
          <Card>
            <Card.Img variant="bottom" src={weatherApp} />
            <Card.Body>
              <Card.Title>SheCodes Plus Workshop Final Project</Card.Title>
              <Card.Text>
                I moved on to SheCodes Plus following the basics workshop. This
                workshop was more extensive than the basics workshop and covered
                more advanced topics of Javascript, HTML and CSS. My final
                project for this workshop involved building a weather app using
                JavaScript. I used AJAX to connect with the API from
                OpenWeatherMap to provide live data for searched cities and
                provide 3 hour forecast data. I have provided a link to both my
                GitHub repository for the project and my Netlify site below.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="row">
                <div className="col">
                  <a href="https://github.com/lucyj204/weather-app-project">
                    <img
                      className="thumbnail"
                      src={gitHub}
                      alt="GitHub repository"
                    />
                  </a>
                </div>
                <div className="col">
                  <a href="https://sleepy-panini-bdebb2.netlify.app/">
                    <img
                      className="logo"
                      src={netlifyLogo}
                      alt="Netlify hosting"
                    />
                  </a>
                </div>
              </div>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={reactWeather} />
            <Card.Body>
              <Card.Title>SheCodes React Workshop Final Project</Card.Title>
              <Card.Text>
                I started the 8 week SheCodes React workshop in November 2020.
                The workshop developed on the knowledge and skills I gained in
                the previous two workshops and introduced React as a a toolkit
                on top of Javascript. I completed assignments each week and a
                final project. The final project was to use React to create a
                weather app with a search engine and API integration. As part of
                the project, I used Netlify to host my weather app. I have
                provided a link to both my GitHub repository for the project and
                my Netlify site below.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="row">
                <div className="col">
                  <a href="https://github.com/lucyj204/react-weather-app">
                    <img
                      className="thumbnail"
                      src={gitHub}
                      alt="GitHub repository"
                    />
                  </a>
                </div>
                <div className="col">
                  <a href="https://hardcore-varahamihira-b12763.netlify.app/">
                    <img
                      className="logo"
                      src={netlifyLogo}
                      alt="Netlify hosting"
                    />
                  </a>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </CardGroup>
        <div className="info-para">
          {/* <h2 className="project-language">Front-End Projects</h2>

          <h3 className="project-title">SheCodes Basics Project</h3>
          <p className="project-detail">
            I completed this landing page for the final project for the SheCodes
            Basics workshop using HTML/ CSS and JavaScript. This was my first
            test of using skills learned over two weeks in the SheCodes
            workshop. For more information on the workshop and to view my
            certificate check out the 'Certificates' section above.
          </p>
          <div className="row">
            <div className="col">
              <img
                className="basics-website"
                src={dnbpage}
                alt="SheCodes Basics workshop website"
              />
            </div>
            <div className="col">
              <img
                className="basics-website"
                src={dnbpage2}
                alt="SheCodes Basics workshop website"
              />
            </div>
          </div>

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
          <p>
            <a
              className="project-link"
              href="https://github.com/lucyj204/weather-app-project"
            >
              View the GitHub repository for my Weather App Project
            </a>
            <br />
            <a
              className="project-link"
              href="https://sleepy-panini-bdebb2.netlify.app/"
            >
              View my React weather app project on Netlify
            </a>
          </p>
          <img className="weather-app" src={weatherApp} alt="Weather App" />
          <h3 className="project-title">SheCodes React Project</h3>
          <p className="project-detail">
            I started the 8 week SheCodes React workshop in November 2020. The
            workshop developed on the knowledge and skills I gained in the
            previous two workshops and introduced React as a a toolkit on top of
            Javascript. I completed assignments each week and a final project.
            The final project was to use React to create a weather app with a
            search engine and API integration. As part of the project, I used
            Netlify to host my weather app. I have provided a link to both my
            GitHub repository for the project and my Netlify site below.
          </p>
          <p>
            <a
              className="project-link"
              href="https://hardcore-varahamihira-b12763.netlify.app/"
            >
              View my React weather app project on Netlify
            </a>
          </p>
          <img
            className="react-weather-image"
            src={reactWeather}
            alt="react weather app"
          />

          <br />
          <a
            className="project-link"
            href="https://github.com/lucyj204/react-weather-app"
          >
            View the GitHub repository for my React weather app
          </a>

          <h3 className="project-title">My Portfolio Website</h3>
          <p className="project-detail">
            I decided to build the website you are looking at right now using
            React and Typescript to refresh my knowledge. To view the source
            code for the website please follow the link below.
          </p>
          <a
            className="project-link"
            href="https://github.com/lucyj204/portfolio-website"
          >
            View the GitHub repository for my website
          </a> */}

          <h2 className="project-language">iOS App Development Projects</h2>
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
          <p className="project-detail">
            <a
              className="project-link"
              href="https://github.com/lucyj204/GroupEventsCalendar"
            >
              View the GitHub repository for my Swift Commingle Project
            </a>
            <br />
            <a
              className="project-link"
              href="https://github.com/lucyj204/GroupEventsCalendarBackend"
            >
              View the GitHub repository for my Typescript backend service for
              Commingle
            </a>
          </p>
          <img
            className="commingle-logo"
            src={commingleLogo}
            alt="Commingle app"
          />
          <h3 className="project-title">Timer App</h3>
          <p className="project-detail">
            As part of my iOS Development Bootcamp, I completed a basic egg
            timer app but I wanted to expand on the skills I learnt in this
            module and put my own spin on a timer app, so I have started to work
            on a multi-timer. I started this in order to have a finished app
            that would be ready for the app store, whilst I can continue to work
            on Commingle, which is a much larger task. Once the MVP is complete,
            you will be able to use this app to create multiple timers that can
            count down at the same time. Although there are other apps that can
            perform this function on the app store, it is not yet a feature of
            the timer on iPhone. I decided to create this app using SwiftUI in
            order to learn more about programming in this way with Swift. I have
            provided a link to my GitHub repository below.
          </p>
          <a
            className="project-link"
            href="https://github.com/lucyj204/TimersApp"
          >
            View the GitHub repository for my timer app
          </a>
          <h3 className="project-title">AR Pokemon 3D</h3>
          <p className="project-detail">
            This project was completed with guidance as part of the iOS
            Devlopment Bootcamp as an introduction to augmented reality. View
            the GitHub repository using the link below.
          </p>
          <p className="project-detail">
            <a href="https://github.com/lucyj204">
              <img
                className="thumbnail"
                src={gitHub}
                alt="Link to GitHub profile"
              />
            </a>
          </p>
          <img
            className="pokemon-image"
            src={eeveeOddish}
            alt="AR Pokemon 3D app on iPhone"
          />
        </div>
      </div>
    </div>
  );
}
