import React, { useContext } from "react";
import { PRODUCTS1 } from "./products";
import { Link } from "react-router-dom";
import { ShopContext } from "./shopContext";

const NewArraivals = () => {
  const { viewProductDetails } = useContext(ShopContext);
  return (
    <>
      {/* New Arraivals Mapping  */}
      <div className="row mt-4 featured-responsive">
        {PRODUCTS1.slice(2, 6).map((product) => (
          <div key={product.id} className="col-md-3 col-6 p-2">
            <div className="featured-container">
              <div key={product.id} className="card">
                {/* Mapping products image */}
                <Link
                  to={`/viewProduct`}
                  onClick={() => viewProductDetails(product.id)}
                >
                  <img
                    src={product.image}
                    alt=""
                    className=" card-img-top img-fluid  m-auto p-3 img"
                  />
                </Link>
                {/* Mapping products details */}
                <div className="card-details">
                  <div className="title mx-3">
                    <span className=" shadow-sm shadow p-2  card-text ">
                      {product.brand}
                    </span>
                    <h5 className="mt-3 mb-3 f-name">{product.name}</h5>
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

export default NewArraivals;
