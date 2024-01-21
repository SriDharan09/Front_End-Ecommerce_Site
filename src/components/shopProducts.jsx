import React, { useContext } from "react";
import { ShopContext } from "./shopContext";
import { Link } from "react-router-dom";
import ReactStarts from "react-rating-stars-component";

const shopProducts = (props) => {
  const { id, name, image, price, brand } = props.data;
  const random = Math.floor(Math.random() * 5) + 2;
  const { viewProductDetails, addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];

  return (
    <>
      <div className="col-3" key={id}>
        <div className="card p-3 my-3">
          <Link to={"/viewProduct"} onClick={() => viewProductDetails(id)}>
            <img
              src={image}
              alt=""
              className="card-img-top img-fluid"
              title="View Details"
            />
          </Link>
          <div className="card-details p-3">
            <div className="d-flex justify-content-between card-text">
              <span className="shadow p-2">{brand}</span>
              <ReactStarts
                classNames=""
                count={5}
                value={random}
                size={26}
                activeColor="#ffd700"
                isHalf={true}
                edit={false}
              />
            </div>
            <h5 className="text-center my-3">{name}</h5>

            <hr />
            <h6 className="text-center my-3 h5 product-price">
              ₹ {price}
              {"     "}
              <span className="text-decoration-line-through text-danger">
                ₹ {price * 2}
              </span>
            </h6>
            <div className="d-flex flex-column align-items-center justify-content-around mb-2">
              <div className="div view-banner">
                <Link
                  to={"/viewProduct"}
                  className="view-btn"
                  onClick={() => viewProductDetails(id)}
                >
                  View Details
                </Link>
              </div>
              <button className="add-btn" onClick={() => addToCart(id)}>
                Add to Cart
                {cartItemCount > 0 && `(${cartItemCount})`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default shopProducts;
