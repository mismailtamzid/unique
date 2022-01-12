import React from 'react';

const Footer = () => {
    return (
      <div className="bg-success text-light pt-5 mt-5">
        <div className="container ">
          <div className="row d-flex justify-content-around ">
            <div className="col-md-6">
              <div>
                <h1>Contact</h1>
                <p>
                  Welcome to WordPress. This is your first post. Edit or delete
                  it, then start writing! Welcome to WordPress. This is your
                  first post. Edit or delete it, then start writing!
                </p>
                <h6>Email: info@nurseryplant.com</h6>
                <h6>Email: info@nurseryplant.com</h6>
                <h6>5464, Melbourne lane, Australia</h6>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <div>
                <h1>Schedule Hours</h1>
                <h5>MON -TUE 11:00 am - 12:00 pm</h5>
                <h5>WEN -THR 11:00 am - 12:00 pm</h5>
                <h5>FRIDAY 3:00 pm - 11:00 pm</h5>
                <h5>SATURDAY CLOSED</h5>
                <h5>SUNDAY CLOSED</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;