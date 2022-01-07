import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import img from "./../../../Images/uniqueabout.png";

const About = () => {
    return (
      <div className="container">
        <div>
          <Row className="d-flex justify-content-center align-items-center">
            <Col>
              <h2>
                About <span className='text-success '>GreenScape</span>
              </h2>
              <p>
                Meatball spare ribs pancetta, turkey beef ribs bresaola chuck
                sausage landjaeger prosciutto sirloin steak turducken.
              </p>{" "}
              <br />
              <p>
                Salami shoulder ball tip jerky filet mignon, pork t-bone ham
                hock ground round pig porchetta. Bacon hamburger sausage doner
                filet mignon tail cupim venison ball tip pastrami spare ribs.
                Cupim burgdoggen corned beef andouille, shankle porchetta
                meatball biltong. Boudin pork loin beef ribs turkey. Pig short
                ribs tenderloin t-bone prosciutto biltong kevin.
              </p>
              <Button variant="success" size="lg" className="text-center me-4">
                READ MORE
              </Button>
            </Col>
            <Col>
              <img height="100%" src={img} alt=""  />
            </Col>
          </Row>
        </div>
      </div>
    );
};

export default About;