import React from "react";
import "./Appbar.css"

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
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="blank">
                    <i class="fab fa-facebook fa-lg"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="blank">
                    <i class="fab fa-google fa-lg"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="blank">
                    <i class="fab fa-twitter fa-lg"></i>
                  </a>
                </li>
              </ul>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item rightnav">
                  <i class="fas fa-map-marker-alt fa-lg"></i> Halishahar, Ctg,
                  BD
                </li>
                <li class="nav-item rightnav">
                  <i class="fas fa-phone fa-lg"></i>
                  +8801518455215
                </li>
                <li class="nav-item rightnav">
                  <i class="fas fa-envelope fa-lg"></i>
                  mismailtamzid@gmail.com
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
