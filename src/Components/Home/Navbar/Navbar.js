import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import img from './../../../Images/uniquenav.png'

const Navbar = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <div className="container-fluid container">
            <Link className="navbar-brand" to="/home">
              <img src={img} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ms-auto d-flex align-items-center justify-content-center">
                <li className="nav-item ">
                  <Link className="nav-link active" aria-current="page" to="/">
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product">
                    PRODUCT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    ABOUT US
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    CONTACT US
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">
                    BLOGS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    DashBoard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link d-flex align-items-center ps-4"
                    to="/login"
                  >
                    <i
                      style={{ color: "green" }}
                      className="fas fa-user  fa-2x me-2"
                    ></i>{" "}
                    LOGIN
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Navbar;