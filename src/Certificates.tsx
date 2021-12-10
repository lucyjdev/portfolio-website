import * as React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import basicsCert from "./ShecodesBasics.png";
import frontEndCert from "./frontEndDevCert.png";
import reactCert from "./reactDevCert.png";

export default function Certificates() {
  return (
    <div>
      <div className="container-fluid">
        <div className="NavigationItems">
          <div className="row">
            <div className="col">
              <nav>
                <div className="d-block p-2 bg-light text-white">
                  <Link to="/">Homepage</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <h1 className="title">Certificates and Qualifications</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img
              className="BasicsCert"
              src={basicsCert}
              alt="SheCodes Basics Workshop Certificate"
            />
          </div>
          <div className="col">
            <h2>SheCodes Introduction to Coding</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img
              className="FrontEndDevCert"
              src={frontEndCert}
              alt="Front End Devlopment Certificate"
            />
          </div>
          <div className="col">
            <h2>SheCodes Plus Workshop</h2>
          </div>
        </div>
      </div>
      <div className="row">
          <div className="col">
            <img
              className="ReactDevCert"
              src={reactCert}
              alt="React Devlopment Certificate"
            />
          </div>
          <div className="col">
            <h2>SheCodes React Workshop</h2>
          </div>
        </div>
      </div>
  );
}
