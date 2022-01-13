import React from "react";
import basicsCert from "./ShecodesBasics.png";
import frontEndCert from "./frontEndDevCert.png";
import reactCert from "./reactDevCert.png";
import iOSCert from "./iOSBootcamp.png";
import { useState } from "react";
import {Carousel} from "react-bootstrap";


// export default function ControlledCarousel() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={iOSCert}
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>iOS App Development Bootcamp</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={reactCert}
//           alt="React development Workshop"
//         />

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>React development Workshop</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={frontEndCert}
//           alt="Front End Devlopment Workshop"
//         />

//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//           Front End Devlopment Workshop
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

export default function Slider() {
  return (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={iOSCert}
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>iOS and Swift Development Bootcamp</h3> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={reactCert}
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={frontEndCert}
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={basicsCert}
      alt="Fourth slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}



