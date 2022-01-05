import * as React from "react";


export default function Contact() {
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
        <div className="container mt-5">
          <h1 className="title">Contact Me</h1>
          <form
            className="row g-3"
            action="https://formsubmit.co/03b60fa18f4d2231d3c3aa529e0259f0"
            method="POST"
          >
            {/* Can add honeypot here in the future to disable captcha           */}

            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                name="First&nbsp;Name"
                id="firstName"
                required
              ></input>
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                name="Last&nbsp;Name"
                id="lastName"
                required
              ></input>
            </div>
            <div className="col-md-8">
              <label htmlFor="emailInfo" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="Email"
                id="emailInfo"
                required
              ></input>
            </div>
            <div className="col-md-4">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                name="Phone&nbsp;Number"
                id="phoneNumber"
                placeholder="+44"
              ></input>
            </div>
            <div className="col-md-12">
              <label htmlFor="comments" className="form-label">
                Enquiry
              </label>
              <textarea
                className="form-control"
                name="Enquiry"
                id="comments"
                rows={3}
                required
              ></textarea>
            </div>
            <div className="col-md-12">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// function Success() {
//   return (
//     <div className="container mt-5">
//       <h1>Contact Me</h1>
//       <p>
//         Thanks for getting in contact 😀. I will come back to you as soon as
//         possible
//       </p>
//     </div>
//   );
// }
