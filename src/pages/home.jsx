import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/hero";
import FeaturedProducts from "../components/featuredProducts";

const home = () => {
  return (
    <>
      <section className="banner">
        <div className="container-xxl">
          <div className="row">
            <div className="banner-details p-5 d-flex align-items-start justify-content-center flex-column">
              <span className=" shadow-lg p-3 text-black">Trade in offer!</span>
              <h1 className="banner-heading">Get up to 50% off</h1>
              <h2 className="banner-para">On all products</h2>
              <Link className="button-link mb-3 ">Shop Now</Link>
            </div>
          </div>
        </div>
      </section>

      <Hero />

      <section className="featured-products p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center">
              <h1 className="feature-heading">Featured Products</h1>
              <p className="feature-para">
                New Modern Trendy and Stylish Products
              </p>
            </div>
            <FeaturedProducts />
          </div>
        </div>
      </section>

      <section className="ad">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center ad-details d-flex flex-column justify-content-center p-3">
              <span className="text-white"> Great Indian Sale !!</span>
              <h5 className="text-white mt-4">
                Great Indian Festival Sale {new Date().getFullYear()} is back
                with it's Exciting Diwali Offers and Discounts on Wide Range of
                Products and Accessories
              </h5>
              <div className="mt-3">
                <button className="btn">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default home;
