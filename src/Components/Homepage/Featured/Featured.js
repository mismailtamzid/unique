import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Featured.css";

// .slice(0, 8)?.map((pd, index) => (
const Featured = () => {
   const [elements, setElements] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setElements(data));
  }, []);
  return (
    <div className="container text-center mt-5">
      <h1 className="text-success">Best popular</h1>

      <Row xs={1} md={3} className="g-4">
        {elements.slice(0, 6)?.map((element) => (
          <div>
            <Col>
              <Card className="imageHover">
                <Card.Img
                  className="imageHover"
                  variant="top"
                  src={element.img}
                />
                <Card.Body>
                  <Card.Title>{element.title}</Card.Title>
                  <Card.Text>Price: ${element.price}</Card.Text>
                  <Link to={`/product/${element._id}`}>
                    <Button variant="success">VIEW MORE</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default Featured;
