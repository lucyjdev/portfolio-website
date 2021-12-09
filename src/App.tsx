import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import profileImage from "./lucy.png";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">About Me</div>
        <div className="col">My Projects</div>
        <div className="col">Contact Information</div>
      </div>
      <div className="PersonalInfo">
        <h1>Lucy Joyce</h1>
        <img className="Photo" src={profileImage} alt="Lucy Joyce" />
        <p>Need to write here about skills etc</p>
      </div>
    </div>
  );
}

export default App;
