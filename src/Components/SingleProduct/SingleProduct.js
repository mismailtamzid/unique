import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleProduct = () => {
    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState([]);

      useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
          .then((res) => res.json())
          .then((data) => setSingleProduct(data));
      }, [id]);
  
    
    return (
      <div className="container">
        <div class="card mb-3 m-5">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={singleProduct.img}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{singleProduct.title}</h5>
                <p class="card-text">{singleProduct.description}</p>
                <p class="card-text">{singleProduct.price}</p>
                <Link to={`/buyProducts/${id}`}>
                  <button className="buy-now-btn btn btn-success">BUY</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleProduct;