import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "./shopContext";
import { Link } from "react-router-dom";
import ReactStarts from "react-rating-stars-component";

const shopProducts = (props) => {
  const { id, name, image, price, brand } = props.data;
  const random = Math.floor(Math.random() * 5) + 3;
  const { viewProductDetails, addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];

  const randomPrice = Math.floor(Math.random() * 451) + 21;

  return (
    <>
      {/* Shop page (*Parent component is shop items*) */}
      <div className="row mt-4   shop-responsive col-md-3 col-6 text-center">
        <div key={id}>
          <div className="card p-3  my-3 shop-container">
            {/* Mapping products image */}
            <Link to={"/viewProduct"} onClick={() => viewProductDetails(id)}>
              <img
                src={image}
                alt=""
                className="card-img-top img-fluid "
                title="View Details"
              />
            </Link>

            {/* Mapping products details */}
            <div className="card-details  p-3">
              {/* Rating star */}
              <div className="d-flex justify-content-between card-text">
                <span className="shop-brand shadow p-2">{brand}</span>
                <div className="rating-star">
                  <ReactStarts
                    classNames="star"
                    count={5}
                    value={random}
                    size={20}
                    activeColor="#ffd700"
                    isHalf={true}
                    edit={false}
                  />
                </div>
              </div>

              <h5 className="text-center my-3 shop-name">{name}</h5>

              <hr />
              <h6 className="text-center my-3 h5 product-price">
                ₹ {price}
                {"     "}
                <span className="text-decoration-line-through text-danger">
                  ₹ {price * 2 + randomPrice}
                </span>
              </h6>

              {/* View details and Add to cart btn */}
              <div className="d-flex flex-column align-items-center justify-content-around mb-2 shop-btn ">
                <div className=" view-banner">
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
      </div>
    </>
  );
};

export default shopProducts;
