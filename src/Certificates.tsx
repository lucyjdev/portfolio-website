import * as React from "react";
import "./App.css";
import Header from "./Header";
import Slider from "./Slider";
import Footer from "./Footer";

export default function Certificates() {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="title">Certificates</h1>
        <Slider />
        <div className="container-fluid">
          <h3 className="project-title">Course Detail</h3>
          <h3 className="certificate-heading">
            SheCodes Introduction to Coding
          </h3>
          <p className="certificate-para">
            The{" "}
            <a className="link" href="https://www.shecodes.io/workshop">
              SheCodes Basics workshop
            </a>{" "}
            is a workshop for beginners to coding covering HTML, CSS, JavaScript
            and VS Code.
          </p>
          <p className="certificate-para">
            I completed the course over two weeks and built a landing page using
            HTML, CSS and JavaScript as my final project.
          </p>
          <p className="certificate-para">
            <a
              className="link"
              href="https://www.shecodes.io/certificates/40f353a498faeb8fc59832e6d2e752d6"
            >
              View verified certificate
            </a>
          </p>
          <hr className="divider" />
          <h3 className="certificate-heading">SheCodes Plus Workshop</h3>
          <p className="certificate-para">
            The{" "}
            <a className="link" href="https://www.shecodes.io/plus">
              SheCodes Plus workshop
            </a>{" "}
            covered advanced HTML and CSS and introduced me to GitHub, Bootstrap
            and hosting. I was also introduced to advanced JavaScript topics and
            learned how to integrate a live API to my application.
          </p>
          <p className="certificate-para">
            The course lasted eight weeks and I built a{" "}
            <a
              className="link"
              href="https://github.com/lucyj204/weather-app-project"
            >
              weather app
            </a>{" "}
            using the Open Weather Map API in Javascript as my final project.
          </p>
          <a
            className="link"
            href="https://www.shecodes.io/certificates/11f56e5b1674d9ffa5688086518f599a"
          >
            View verified certificate
          </a>
          <hr className="divider" />
          <h3 className="certificate-heading">SheCodes React Workshop</h3>
          <p className="certificate-para">
            The{" "}
            <a className="link" href="https://www.shecodes.io/react">
              SheCodes React workshop
            </a>{" "}
            covered HTML, CSS, Javascript, GitHub, Bootstrap and APIs in more
            detail and introduced React.
          </p>
          <p className="certificate-para">
            I learnt about React components, events, states, forms and
            properties in the first part of the course and conditional
            rendering, loops, AJAX and external components in later weeks.
          </p>
          <p className="certificate-para">
            I also covered using the terminal, npm, create react app, react
            debugging and React hosting. I built a{" "}
            <a
              className="link"
              href="https://github.com/lucyj204/react-weather-app"
            >
              weather app using React
            </a>{" "}
            as my final project.
          </p>
          <a
            className="link"
            href="https://www.shecodes.io/certificates/2f60992402a11738860ab607c86441a7"
          >
            View verified certificate
          </a>
          <hr className="divider" />
          <h3 className="certificate-heading">
            iOS and Swift - The Complete iOS App Development Bootcamp
          </h3>
          <p className="certificate-para">
            I completed the{" "}
            <a
              className="link"
              href="https://www.udemy.com/course/ios-13-app-development-bootcamp/"
            >
              iOS and Swift – The Complete iOS App Development Bootcamp
            </a>{" "}
            between July and December 2021. This course covered concepts of
            Object Oriented Programming, control structures, data structures,
            software design, networking, persistent local data storage,
            implementing In-App Purchases with Apple StoreKit, machine learning,
            augmented reality and SwiftUI.
          </p>
          <p className="certificate-para">
            {" "}
            I have had experience building over 20 apps as part of this course
            and I have since started to develop an iOS collaborative events
            calendar app and a timer app developing on the skills I learned
            during the bootcamp.
          </p>
          <a
            className="link"
            href="https://www.udemy.com/certificate/UC-713a6b81-5bd3-4b58-bb4f-4e376fc765b4/"
          >
            View verified certificate
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
