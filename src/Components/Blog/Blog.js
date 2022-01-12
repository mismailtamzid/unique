import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import image2 from "./../../Images/Blog11";
// import image4 from "./../../Images/Blog12";
// import image5 from "./../../Images/Blog13";
// import image6 from "./../../Images/Blog14";


const Blog = () => {
  return (
    <div className="ms-5" >
      <div className=" mt-5">
        <div className="d-flex justify-content-center fs-2">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/" style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                News
              </li>
            </ol>
          </nav>
        </div>

        <br />
        <br />
        <div>
          <Row>
            <div className="col-md-3 text-center">
              <Card className="pb-5 mb-5">
                <h4 className="pt-3">RECENT ARTICLES</h4>
                <hr className=" bg-info rounded"></hr>
                <div className=" px-2">
                  <div>
                    <div className="d-flex d  align-items-center p-4">
                      <div>
                        <img
                          height="80px"
                          src={
                            "http://theme-stall.com/nurseryplant/demos/wp-content/uploads/2017/05/blog3-900x560.jpg"
                          }
                          alt=""
                        />
                      </div>
                      <div className="ms-4">
                        <h6>
                          <Link style={{ textDecoration: "none" }} to="#">
                            <h6>Checking a brand</h6>{" "}
                          </Link>
                        </h6>
                        <p>Dec 12, 2021</p>
                      </div>
                    </div>
                    <div className="d-flex  align-items-center p-4">
                      <div>
                        <img
                          height="80px"
                          src={
                            "http://theme-stall.com/nurseryplant/demos/wp-content/uploads/2017/04/blog22-900x560.jpg"
                          }
                          alt=""
                        />
                      </div>
                      <div className="ms-5">
                        <Link style={{ textDecoration: "none" }} to="#">
                          <h6>Technical laptop</h6>
                        </Link>
                        <p>Dec 12, 2020</p>
                      </div>
                    </div>
                    <div className="d-flex  align-items-center p-4">
                      <div>
                        <img
                          height="80px"
                          src={
                            "http://theme-stall.com/nurseryplant/demos/wp-content/uploads/2017/04/blog11-900x560.jpg"
                          }
                          alt=""
                        />
                      </div>
                      <div className="ms-4">
                        <Link style={{ textDecoration: "none" }} to="#">
                          <h6>Comparing between products</h6>
                        </Link>
                        <p>Dec 12, 2021</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-md-8 text-center">
              <Row xs={1} md={2} lg={2} className="g-4">
                <Col className="mb-4">
                  <Card style={{ borderRadius: "none" }}>
                    <Card.Body>
                      <Card.Title>
                        <p className="text-success">Flower Gardening</p>
                        <h6>Dec 12, 2020</h6>

                        <p>Decorate your Home</p>
                      </Card.Title>
                      <Card.Img
                        variant="top"
                        src={
                          "http://theme-stall.com/nurseryplant/demos/wp-content/uploads/2017/05/blog3-900x560.jpg"
                        }
                      />
                      <Card.Text>
                        It has become the industry standard for design mockups
                        and prototypes. By adding a little bit of Latin to a
                        mockup, you are able to show clients a more complete
                        version of your design witho...
                      </Card.Text>
                      <Button
                        as={Link}
                        to="/blog/blogDetails1"
                        className="btn btn-success"
                      >
                        Read more...
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="mb-4">
                  <Card style={{ borderRadius: "none" }}>
                    <Card.Body>
                      <Card.Title>
                        <p className="text-success">New Plant</p>
                        <h6>Dec 12, 2020</h6>

                        <p>Serve your world</p>
                      </Card.Title>
                      <Card.Img
                        variant="top"
                        src={
                          "http://theme-stall.com/nurseryplant/demos/wp-content/uploads/2017/04/blog22-900x560.jpg"
                        }
                      />
                      <Card.Text>
                        It has become the industry standard for design mockups
                        and prototypes. By adding a little bit of Latin to a
                        mockup, you are able to show clients a more complete
                        version of your design witho...
                      </Card.Text>
                      <Button
                        as={Link}
                        to="/blog/blogDetails2"
                        className="btn btn-success"
                      >
                        Read more...
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row xs={1} md={2} lg={2} className="g-4">
                <Col className="mb-4">
                  <Card style={{ borderRadius: "none" }}>
                    <Card.Body>
                      <Card.Title>
                        <p className="text-success">Garden Care</p>
                        <h6>Dec 12, 2020</h6>

                        <p>Plant more and more</p>
                      </Card.Title>
                      <Card.Img
                        variant="top"
                        src={
                          "http://theme-stall.com/nurseryplant/demos/wp-content/uploads/2017/04/blog11-900x560.jpg"
                        }
                      />
                      <Card.Text>
                        It has become the industry standard for design mockups
                        and prototypes. By adding a little bit of Latin to a
                        mockup, you are able to show clients a more complete
                        version of your design witho...
                      </Card.Text>
                      <Button
                        as={Link}
                        to="/blog/blogDetails3"
                        className="btn btn-dark"
                      >
                        Read more...
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="mb-4">
                  <Card style={{ borderRadius: "none" }}>
                    <Card.Body>
                      <Card.Title>
                        <p className="text-success">Gardening</p>
                        <h6>Dec 12, 2020</h6>

                        <p> Mind happiness</p>
                      </Card.Title>
                      <Card.Img
                        variant="top"
                        src={
                          "http://theme-stall.com/nurseryplant/demos/wp-content/uploads/2017/04/blog44-900x560.jpg"
                        }
                      />
                      <Card.Text>
                        It has become the industry standard for design mockups
                        and prototypes. By adding a little bit of Latin to a
                        mockup, you are able to show clients a more complete
                        version of your design witho...
                      </Card.Text>
                      <Button
                        as={Link}
                        to="/blog/blogDetails4"
                        className="btn btn-dark"
                      >
                        Read more...
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Blog;
