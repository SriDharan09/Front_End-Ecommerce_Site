import React from "react";
import { PRODUCTS } from "./products";

const featuredProducts = () => {
  return (
    <>
      <div className="row mt-4">
        {PRODUCTS.slice(4, 8).map((product) => (
          <div className="col-3 p-2">
            <div key={product.id}>
              <div className="card">
                <img
                  src={product.image}
                  alt=""
                  className=" card-img-top img-fluid  m-auto p-3 "
                />
                <div className="card-details">
                  <div className="title mx-3">
                    <span className="shadow p-2 card-text">
                      {product.brand}
                    </span>
                    <h5 className="mt-3">{product.name}</h5>
                  </div>
                  <div className="card-footer  text-center">
                    <p className="product-status">{product.status}</p>
                    <hr />
                    <strike className="text-danger feature-price ">
                      ₹ {product.price}
                    </strike>
                    <sup className="text-success rate">{product.rate}</sup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default featuredProducts;
