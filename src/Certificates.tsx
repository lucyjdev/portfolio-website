import * as React from "react";
import "./App.css";
import basicsCert from "./ShecodesBasics.png";
import frontEndCert from "./frontEndDevCert.png";
import reactCert from "./reactDevCert.png";
import iOSCert from "./iOSBootcamp.png";
import Navigation from "./Navigation";
import Slider from "./Slider";

export default function Certificates() {
  return (
    <div className="container">
      <Navigation />
      
      <h1 className="title">Certificates</h1>
      <Slider/>
      <div className="info-para">
        <div className="container-fluid">
          <div className="row" id="certificate-rows">
            <div className="col">
              <h3>SheCodes Introduction to Coding</h3>
              <p>
                The SheCodes Basics workshop is a workshop for beginners to
                coding covering HTML, CSS, JavaScript and VS Code.
              </p>
              <p>
                The course was two weeks and included making a website for a
                final project. A link to this website can be found in the
                projects section of my website.
              </p>
              <a href="https://www.shecodes.io/certificates/40f353a498faeb8fc59832e6d2e752d6">
                View verified certificate
              </a>
            </div>
            <div className="col">
              <img
                className="BasicsCert"
                src={basicsCert}
                alt="SheCodes Basics Workshop Certificate"
              />
            </div>
          </div>
          <hr/>
          <div className="row" id="certificate-rows">
            <div className="col">
              <img
                className="FrontEndDevCert"
                src={frontEndCert}
                alt="Front End Devlopment Certificate"
              />
            </div>
            <div className="col">
              <h3>SheCodes Plus Workshop</h3>
              <p>
                The SheCodes Plus workshop covered advanced HTML and CSS and
                introduced me to GitHub, Bootstrap and hosting.
              </p>
              <p>
                The course lasted eight weeks and I built a weather app using
                the Open Weather Map API in Javascript as my final project. A
                link to my final project can be found under the projects section
                above.
              </p>
              <a href="https://www.shecodes.io/certificates/11f56e5b1674d9ffa5688086518f599a">
                View verified certificate
              </a>
            </div>
          </div>
        </div>
        <div className="row" id="certificate-rows">
          <div className="col">
            <h3>SheCodes React Workshop</h3>
            <p>
              The SheCodes React workshop covered HTML, CSS, Javascript, GitHub,
              Bootstrap and APIs in more detail and introduced React.
            </p>
            <p>
              I learnt about React components, events, states, forms and
              properties in the first part of the course and conditional
              rendering, loops, AJAX and external components in later weeks.
            </p>
            <p>
              I also covered using the terminal, NPM, create react app, react
              debugging and React hosting. My final project involved building my
              weather app in React and this can be found under the projects
              section above.
            </p>
            <a href="https://www.shecodes.io/certificates/2f60992402a11738860ab607c86441a7">
              View verified certificate
            </a>
          </div>
          <div className="col">
            <img
              className="ReactDevCert"
              src={reactCert}
              alt="React Devlopment Certificate"
            />
          </div>
        </div>
        <div className="row" id="certificate-rows">
          <div className="col">
            <img
              className="iOSCert"
              src={iOSCert}
              alt="iOS and Swift Development Bootcamp Certificate"
            />
          </div>
          <div className="col">
            <h3>iOS and Swift - The Complete iOS App Development Bootcamp</h3>
            <p>
              I started this course in April 2021 as a complete beginner to iOS
              app development. To learn more about my journey to Swift please
              check out the 'About Me' section above.
            </p>
            <p>
              {" "}
              I have had experience building over 20 apps as part of this course
              from basic calculator and timer apps to AR apps. I am now working
              on my own app to deploy to the app store. Further details on the
              idea behind my app and my progress can be found under the projects
              section above.
            </p>
            <p>
              For further details on the modules covered in this course, please
              see the{" "}
              <a href="https://www.udemy.com/course/ios-13-app-development-bootcamp/">
                course content
              </a>{" "}
              on Udemy.
            </p>
            <a href="https://www.udemy.com/certificate/UC-713a6b81-5bd3-4b58-bb4f-4e376fc765b4/">
              View verified certificate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
