import * as React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import timerScreenshot1 from "./images/timerScreenshot-portrait.png";
import timerScreenshot2 from "./images/timerScreenshot-3-portrait.png";
import timerScreenshot3 from "./images/timerScreenshot-4-portrait.png";
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
                I started the SheCodes Plus workshop in August 2020, following
                completion of the basics workshop. This workshop was more
                extensive than the basics workshop and covered more advanced
                topics of Javascript, HTML and CSS. My final project for this
                workshop involved building a weather app using JavaScript. I
                used AJAX to connect with the API from OpenWeatherMap to provide
                live data for searched cities and provide 3 hour forecast data.
                I have provided a link to both my GitHub repository for the
                project and my Netlify site below.{" "}
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

        <h2 className="project-language">iOS App Development Projects</h2>
        <h3 className="project-title">Timer App</h3>
        <CardGroup>
          <Card>
            <Card.Img variant="bottom" src={timerScreenshot1} />
            <Card.Body>
              <Card.Title>Kitty Timer - Main View</Card.Title>
              <Card.Text>
                I have been working on a timer app following completion of my
                iOS app development bootcamp to expand on the skills that I have
                learned as part of the course. The app functions as a basic
                timer at present however, I am continuing to develop this to
                have a multi timer function and a unique UI. The timer currently
                meows when the timer is over, hence the name Kitty Timer. {" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={timerScreenshot2} />
            <Card.Body>
              <Card.Title>Kitty Timer - Set Timer View</Card.Title>
              <Card.Text>
                The screenshot above shows the custom time picker I created in a
                controller that is presented modally. The data from this picker
                is then passed back to the main timer view using a closure,
                where the data is used to update the completion time and timer
                duration.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="bottom" src={timerScreenshot3} />
            <Card.Body>
              <Card.Title>
                Kitty Timer - Main View after timer is set
              </Card.Title>
              <Card.Text>
                The screenshot above shows the appearance of the main view once
                'Set' has been pressed in the set timer view. The data is
                encoded and stored as a JSON object in UserDefaults so that the
                timer data is stored when the app is closed. Once the app is
                re-launced, the data is decoded and the countdown is updated
                accordingly. I have also used local notifications so that a
                notification will appear on the users device if the timer
                finishes while the app is in the background.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <h3 className="project-title">More projects coming soon 👩‍💻</h3>
      </div>
      <Footer />
    </div>
  );
}
