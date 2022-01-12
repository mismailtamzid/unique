import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../Hook/useFirebase";
import Spinner from "../Spinner/Spinner";
import MyWishlist from "./MyWishlist/MyWishlist";

const MyWishlists = () => {
  const { user } = useFirebase();
  const [Wishlists, setWishlists] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    const url = `http://localhost:5000/wishlist/${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWishlists(data))
      .finally(() => setIsLoading(false));
  }, [user]);
  if (isloading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="myorder">
          <h1 className="heading" style={{ backgroundColor: "#FCF6F6" }}>
            My Wishlist
          </h1>
          <div className="container">
            {Wishlists.length < 1 ? (
              <>
                <div className="wishlist-no-data">
                  <p>
                    <i className="far fa-heart" />
                  </p>
                  <p>
                    There are no favorites yet.
                    <br />
                    Add your favorites to wishlist and they will show here.
                  </p>
                  <button className="btn-shopping">
                    <Link to="/product">CONTINUE SHOPPING</Link>
                  </button>
                </div>
              </>
            ) : (
              <div className="row">
                {Wishlists.map((Wishlist) => (
                  <MyWishlist
                    Wishlist={Wishlist}
                    key={Wishlist._id}
                  ></MyWishlist>
                ))}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
};

export default MyWishlists;
