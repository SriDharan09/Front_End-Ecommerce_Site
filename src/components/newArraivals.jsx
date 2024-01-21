import React from "react";
import { PRODUCTS1 } from "./products";

const newArraivals = () => {
  return (
    <>
      <div className="row mt-4">
        {PRODUCTS1.slice(2, 6).map((product) => (
          <div className="col-3 p-2">
            <div key={product.id}>
              <div className="card">
                <img
                  src={product.image}
                  alt=""
                  className=" card-img-top img-fluid  m-auto p-3 img"
                />
                <div className="card-details">
                  <div className="title mx-3">
                    <span className="shadow p-2  card-text ">
                      {product.brand}
                    </span>
                    <h5 className="mt-3 mb-3">{product.name}</h5>
                  </div>
                  <div className="card-footer  text-center">
                    <p className="product-status mt-3">{product.status}</p>
                    <hr />
                    <h4 className="text-danger arrival-price ">
                      ₹ {product.price}
                    </h4>
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

export default newArraivals;
