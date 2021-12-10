import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function About() {
    return (
      <>
        <h1>About Me</h1>
        <nav>
          <Link to="/">Return to Homepage</Link>
        </nav>
      </>
    );
  }