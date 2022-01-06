import React from 'react';



const AppBar = () => {
    return (
      <div>
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-success">
            <div class="container-fluid  text-light">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse container"
                id="navbarTogglerDemo01"
              >
                <a class="navbar-brand  text-light" href="blank"></a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      <i class="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      <i class="fab fa-google"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="blank">
                      <i class="fas fa-map-marker-alt"></i> Halishahar, Ctg, BD
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="blank">
                      <i class="fas fa-phone"></i>
                      <i class="fas fa-envelope"></i> +8801518455215
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="blank">
                      <i class="fas fa-envelope"></i> mismailtamzid@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
};

export default AppBar;