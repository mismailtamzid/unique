import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css"


const Banner = () => {
  return (
    <div>
      <div className="bannerSize">
        <div>
          <div className="container text-center">
            <h1 className="display-3 fw-bold">Great Technologies to Provide</h1>
            <p className="display-4">Your Landscaping Design</p>
            <Link to="/about">
              {" "}
              <Button
                variant="outline-light"
                size="lg"
                className="text-center me-4"
              >
                ABOUT US
              </Button>
            </Link>
            <Link to="/contact">
              {" "}
              <Button variant="light" size="lg" className="">
                CONTACT US
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
