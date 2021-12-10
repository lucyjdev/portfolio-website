import * as React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
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
      <div className="container mt-5">
        <h1>Contact Me</h1>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
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
  );
}
