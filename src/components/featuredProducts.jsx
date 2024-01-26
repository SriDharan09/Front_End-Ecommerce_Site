import React, { useContext } from "react";
import { PRODUCTS } from "./products";
import { IoIosTimer } from "react-icons/io";
import { Link } from "react-router-dom";
import { ShopContext } from "./shopContext";
const FeaturedProducts = () => {
  const { viewProductDetails } = useContext(ShopContext);
  return (
    <>
      {/* Featured Products Mapping */}
      <div className="row mt-4 featured-responsive">
        {PRODUCTS.slice(4, 8).map((product) => (
          <div key={product.id} className="col-6 col-md-3 p-2 mmm">
            <div className="featured-container">
              {/* Mapping products image */}
              <div key={product.id} className="card">
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
                    <span className=" shadow-sm shadow  p-2  card-text ">
                      {product.brand}
                    </span>
                    <h5 className="mt-3 mb-3 f-name">{product.name}</h5>
                  </div>
                  <div className="card-footer  text-center">
                    <p className="product-status mt-2">
                      {product.status} <IoIosTimer className="fs-5" />
                    </p>
                    <hr />
                    <strike className="text-danger feature-price ">
                      ₹ {product.price * 2}
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

export default FeaturedProducts;
