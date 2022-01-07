import React from 'react';
import { Button } from 'react-bootstrap';
import "./AwardSection.css";

const AwardSection = () => {
    return (
      <div className="Award d-flex justify-content-center align-items-center bg-opacity-0">
        <div className="container ">
          <div>
            <div className=" text-center">
              <h1>Award Winning Gardener Landscape Company</h1>
              <p className="fs-3">
                Pancetta pork belly pork loin ham meatloaf. Cupim ribeye
                tenderloin, burgdoggen sausage ham beef hamburger <br /> boudin
                ham hock t-bone rump shankle.
              </p>
              <Button variant="success" size="lg" className="text-center me-4">
                READ MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AwardSection;