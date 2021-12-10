import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function Projects() {
    return (
      <>
        <h1>My Projects</h1>
        <nav>
          <Link to="/">Return to Homepage</Link>
        </nav>
      </>
    );
  }