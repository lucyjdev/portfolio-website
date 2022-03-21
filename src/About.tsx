import * as React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function About() {
  return (
    <div>
      <Navigation />
      <div className="container">
        <h1 className="title">About Me</h1>
        <div className="about-title">
          <h2>Programming Experience</h2>
          <div className="info-para">
            <p>
              I started learning to code when I was on furlough in 2020. I was
              always curious about coding, and this felt like the perfect
              opportunity to explore it in more detail and to see if it was
              something I enjoyed and could succeed at. Over the next six
              months, I completed the{" "}
              <a className="link" href="https://www.shecodes.io/workshop">
                SheCodes Basics
              </a>
              ,{" "}
              <a className="link" href="https://www.shecodes.io/plus">
                SheCodes Plus
              </a>{" "}
              and{" "}
              <a className="link" href="https://www.shecodes.io/react">
                SheCodes React
              </a>{" "}
              workshops and studied HTML, CSS, JavaScript, React, Bootstrap,
              GitHub, Hosting with Netlify and using APIs. I created a web page
              as part of the ‘Introduction to Coding’ workshop, a
              <a
                className="link"
                href="https://github.com/lucyj204/weather-app-project"
              >
                {" "}
                weather app
              </a>{" "}
              as part of the Plus workshop and a{" "}
              <a
                className="link"
                href="https://github.com/lucyj204/react-weather-app"
              >
                weather app using JavaScript and React
              </a>{" "}
              as part of the React workshop.
            </p>
            <p>
              I left my Customer Success role in July 2021 to focus on studying
              coding full time. Between July and December 2021, I completed{" "}
              <a
                className="link"
                href="https://www.udemy.com/course/ios-13-app-development-bootcamp/"
              >
                iOS and Swift – The Complete iOS App Development Bootcamp
              </a>
              . As part of this bootcamp I have studied Storyboards, Auto
              Layout, Design Patterns and Code Structuring, Intermediate and
              Advanced Swift, Networking, JSON parsing, APIs, Core Location,
              Firebase, TableViews, CocoaPod dependencies, Command Line and
              Terminal, SwiftUI and declarative programming, Git, GitHub and
              version control, Local Data Persistence, Core ML, Create ML,
              ARKit, App Design and App Marketing.
            </p>
            <p>
              Following completion of the iOS App Development Bootcamp, I began
              developing an{" "}
              <a
                className="link"
                href="https://github.com/lucyj204/GroupEventsCalendar"
              >
                iOS collaborative events calendar app
              </a>{" "}
              for organising social events among friends. This has furthered my
              experience using Swift, CocoaPods, libraries such as Realm,
              FSCalendar, and SwipeCellKit, and utilities including URLSession,
              JSONEncoder and UITableView.
            </p>
            <p>
              As the data for groups and events needed to be synchronised
              between multiple devices, I moved from using Realm to implementing
              a{" "}
              <a
                className="link"
                href="https://github.com/lucyj204/GroupEventsCalendarBackend"
              >
                backend REST HTTP service using Node.js, Express, PostgreSQL and
                TypeScript
              </a>
              . I am still in the process of developing both my app and backend
              service. However, it has been a great learning experience with the
              work I have completed so far and has introduced me to new
              technologies.
            </p>
            <p>
              In recent months I have been building this{" "}
              <a
                className="link"
                href="https://github.com/lucyj204/portfolio-website"
              >
                portfolio website using TypeScript, React and Bootstrap
              </a>
              . I have also been working on a{" "}
              <a className="link" href="https://github.com/lucyj204/TimerSwift">
                timer app using Swift
              </a>
              .
            </p>
            <p>
              Outside of my courses I have been attending or viewing tech talks
              online to increase my exposure. The talks include a Mongo DB
              conference, Apple Developer talks and online lectures and
              tutorials. I have spent time reading documentation and started to
              read ‘Structure and Interpretation of Computer Programs’ by Harold
              Abelson and Gerald Jay Sussman with Julie Sussman. I have also
              been working through the ‘Computer Science Fundamentals’,
              ‘Pre-Algebra’ and ‘Algorithm Fundamentals’ courses available on
              Brilliant, to further develop my knowledge of these topics.
            </p>
            <p>
              For more information on my career and work experience please take
              a look at my{" "}
              <a
                className="link"
                href="https://www.linkedin.com/in/lucy-joyce-597485166/"
              >
                Linkedin profile.
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
