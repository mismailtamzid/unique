import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = () => {
  const [elements, setElements] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setElements(data));
  }, []);
  return (
    <div className="container text-center">
      <h4>total products {elements.length}</h4>

      <Row xs={1} md={3} className="g-4">
        {elements.map((element) => (
          <div>
            <Col>
              <Card>
                <Card.Img variant="top" src={element.img} />
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

export default Product;
