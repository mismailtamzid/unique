import React from 'react';

const Services = () => {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <h1>Our Services</h1>
          <p>
            Pork chop tongue bacon, pastrami chuck burgdoggen kevin corned beef.
            Boudin <br />
            Ground round alcatra spare ribs leberkas pastrami
          </p>
          <div className="row">
            <div className="col-md-5 d-flex justify-content-center align-items-center bg-dark rounded p-5 bg-opacity-0 me-5">
              <div>
                <i class="fas fa-shower fa-4x bg-success p-2 rounded"></i>
              </div>
              <div className="text-light">
                <h3>Lawn & Garden Care</h3>
                <p>
                  Chicken meatball pastrami frankfurter jerky short loin. Pig
                  swine biltong cow. Burgdog corned beef landjaeger.
                </p>
              </div>
            </div>
            <div className="col-md-5 d-flex justify-content-center align-items-center bg-dark rounded p-5 bg-opacity-0 ms-5">
              <div>
                <i class="fas fa-seedling fa-4x bg-success p-2 rounded"></i>
              </div>
              <div className="text-light">
                <h3>Design & Renovation</h3>
                <p>
                  Spare ribs tongue doner, cupim ham tri-tip tender short loin
                  short ribs. Landjaeger spare ribs swine t-bone.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-5 d-flex justify-content-center align-items-center bg-dark rounded p-5 bg-opacity-0 me-5">
              <div>
                <i class="fas fa-cut fa-4x bg-success p-2 rounded"></i>
              </div>
              <div className="text-light">
                <h3>Planting & Removal</h3>
                <p>
                  Sausage swine porchetta meatloaf. Cow venison sirloin
                  drumstick. Biltong tri-tip ball tip drumstick swine spare.
                </p>
              </div>
            </div>
            <div className="col-md-5 d-flex justify-content-center align-items-center bg-dark rounded p-5 bg-opacity-0 ms-5">
              <div>
                <i class="fas fa-shower fa-4x bg-success p-2 rounded"></i>
              </div>
              <div className="text-light">
                <h3>Irrigation & Drainage</h3>
                <p>
                  Cow frankfurter turkey salami. Capicola shank frankfurter,
                  hamburger porchetta pastrami shoulder landjaeger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Services;