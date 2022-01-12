import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from "./../../../Images/uniqueabout.png";

const About = () => {
    return (
      <div className="container pt-5">
        <div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-lg-6">
              <h2>
                About <span className="text-success ">GreenScape</span>
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
              <Link to="/blog">
                <Button
                  variant="success"
                  size="lg"
                  className="text-center me-4"
                >
                  READ MORE
                </Button>
              </Link>
            </div>
            <div className="col-md-6 col-lg-6">
              <img width="100%" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;