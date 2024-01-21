import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/hero";
import CustomerReview from "../components/customerReview";
import FeaturedProducts from "../components/featuredProducts";
import NewArraivals from "../components/newArraivals";

import img1 from "../assets/images/banner/b10.jpg";
import img2 from "../assets/images/banner/b17.jpg";

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

      <section className="new-products p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center">
              <h1 className="feature-heading">New Arrivals</h1>
              <p className="feature-para">Your Best Designer Outfits</p>
            </div>
            <NewArraivals />
          </div>
        </div>
      </section>

      <section className="deals p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 p-4 ">
              <div className="card row">
                <div className="d-flex">
                  <div className="col-md-4">
                    <img
                      src={img2}
                      alt=""
                      className="img-fluid rounded-start h-100 p-2"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <span>Hot Deals</span>
                      <h3>Buy 1 Get 1 Free</h3>
                      <p>
                        The latest best collection in our closet Feel Cute with
                        our outfit
                      </p>
                      <button className="button-deal btn mt-3">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 p-4">
              <div className="card row">
                <div className="d-flex">
                  <div className="col-md-4">
                    <img
                      src={img1}
                      alt=""
                      className="img-fluid rounded-start h-100 p-2"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <span>Season-In</span>
                      <h3>All Weather Attire</h3>
                      <p>
                        It never matter which season it is We got you covered.
                        Explore Now.
                      </p>
                      <button className="button-deal btn mt-3">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="review p-5">
        <div className="container-xxl">
          <div className="row">
            <CustomerReview />
          </div>
        </div>
      </section>

     
    </>
  );
};

export default home;
