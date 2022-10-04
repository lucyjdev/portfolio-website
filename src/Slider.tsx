import React from "react";
import basicsCert from "./images/ShecodesBasics.png";
import frontEndCert from "./images/frontEndDevCert.png";
import reactCert from "./images/reactDevCert.png";
import iOSCert from "./images/iOSBootcamp.png";
import CFGCert from "./images/CFGCertificate.png";
import { Carousel } from "react-bootstrap";

export default function Slider() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={CFGCert} alt="First slide" />
        <Carousel.Caption>
          {/* <h3>iOS and Swift Development Bootcamp</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={iOSCert} alt="Second slide" />
        <Carousel.Caption>
          {/* <h3>iOS and Swift Development Bootcamp</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={reactCert} alt="Third slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={frontEndCert} alt="Fourth slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={basicsCert} alt="Fifth slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
