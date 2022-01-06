import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "./Banner.css"


const Banner = () => {
  return (
    <div>
      <div className="bannerSize">
        <div>
          <div className="container text-center">
            <h1 className="display-3 fw-bold">Great Technologies to Provide</h1>
            <p className="display-4">Your Landscaping Design</p>
            <Button
              variant="outline-light"
              size="lg"
              className="text-center me-4"
            >
              ABOUT US
            </Button>
            <Button variant="light" size="lg" className="">
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
