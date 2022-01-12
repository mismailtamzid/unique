import React from "react";
import { Breadcrumb } from "react-bootstrap";


const BlogDetails4 = () => {
  return (
    <div>
      <div className="container p-5">
        <div className="mt-5">
          <h2>Gardening</h2>
          <Breadcrumb className="">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/blogs">Blogs</Breadcrumb.Item>
            <Breadcrumb.Item active>BlogDetails</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="">
          <img
            className="fluid container"
            src="http://theme-stall.com/nurseryplant/demos/wp-content/uploads/2017/04/blog44-900x560.jpg"
            alt=""
          />
        </div>
        <div className="text-start mt-5">
          <p>Dec 12,2020</p>

          <h3>Gardening</h3>
          <p>
            {" "}
            It has become the industry standard for design mockups and
            prototypes. By adding a little bit of Latin to a mockup, you are
            able to show clients a more complete version of your design.Every
            Product is genuine you can check those also. If you face any
            problems just sent a message to us you can find that in contact us.
            We provide money back gurantte also.We value your money and we give
            the best service.Your appreciate your review feel free to review we
            will try to improve our services.
          </p>
          <hr />
          <div>
            <i
              style={{ color: "green" }}
              className="fa fa-tags"
              area-hidden="true"
            ></i>
            <a
              href="/blogs"
              className="ms-2 me-3 text-decoration-none text-black"
            >
              Mind
            </a>
            <a href="/blogs" className="text-decoration-none text-black">
              Happyness
            </a>
          </div>
          <div className="mt-3">
            <label>Share this on: </label>
            <a
              href="https://www.facebook.com/"
              className="ms-2 me-2 text-primary"
            >
              <span>
                <i
                  style={{ color: "green" }}
                  className="fab fa-facebook-square"
                ></i>
              </span>
            </a>
            <a href="https://www.twitter.com/" className="ms-2 me-2 ">
              <span>
                <i style={{ color: "green" }} className="fab fa-twitter"></i>
              </span>
            </a>
            <a
              href="https://www.pinterest.com/"
              className="ms-2 me-2 text-danger"
            >
              <span>
                <i
                  style={{ color: "green" }}
                  className="fab fa-pinterest-p"
                ></i>
              </span>
            </a>
            <a href="https://www.google.com/" className="ms-2 text-danger">
              <span>
                <i style={{ color: "green" }} className="fab fa-google"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails4;
