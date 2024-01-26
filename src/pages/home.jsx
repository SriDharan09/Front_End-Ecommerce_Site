import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/hero";
import CustomerReview from "../components/customerReview";
import FeaturedProducts from "../components/featuredProducts";
import NewArraivals from "../components/newArraivals";

import img1 from "../assets/images/banner/b10.jpg";
import img2 from "../assets/images/blog/b3.jpg";

const home = () => {
  return (
    <>
      {/* Home-Banner */}
      <section className="banner">
        <div className="container-xxl">
          <div className="row">
            <div className="banner-details p-5 d-flex align-items-start justify-content-center flex-column">
              <span className="shadow-lg p-3 text-black d-none d-md-inline">
                Apply "Discount50" Coupon Code to
              </span>
              <span className="shadow p-2 text-black coupon-small d-md-none">
                Apply "Discount50" Coupon Code to
              </span>

              <h1 className="banner-heading">Get up to 50% off</h1>
              <h2 className="banner-para">On all products</h2>
              <Link to={"/shop"} className="button-link mb-3 ">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Component */}
      <Hero />

      {/* Featured Products */}
      <section className="featured-products p-5">
        <div className="container">
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

      {/* Ad Sale */}
      <section className="ad">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center ad-details d-flex flex-column justify-content-center p-3">
              <span className=" ad-info text-white mb-3 h3 text-success">
                {" "}
                Great Indian Sale !!
              </span>
              <h5 className="ad-heading text-white mt-4 mt-sm-0">
                Great Indian Festival Sale {new Date().getFullYear()} is back
                with it's Exciting Offers and Discounts on Wide Range of
                Products and Accessories
              </h5>
              <div className="mt-3">
                <Link to={"/shop"} className="btn deal-btn ad-btn text-white ">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
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

      {/* Deals */}
      <section className="deals p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-6 col-12   p-4 ">
              <div className="card row">
                <div className="d-flex">
                  <div className="col-md-4  ">
                    <img
                      src={img2}
                      alt=""
                      className="img-fluid img-ad rounded-start h-100 p-2"
                    />
                  </div>
                  <div className="col-md-8 ">
                    <div className="card-body ">
                      <span className="deal-span">Hot Deals</span>
                      <h3 className="deal-h3">Buy 1 Get 1 Free</h3>
                      <p className="deal-p">
                        The latest best collection in our closet Feel Cute with
                        our outfit
                      </p>
                      <button className="button-deal btn mt-3">
                        <a href="/shop" className="text-black">
                          Learn More
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 p-4">
              <div className="card row">
                <div className="d-flex">
                  <div className="col-md-4">
                    <img
                      src={img1}
                      alt=""
                      className="img-fluid img-ad rounded-start h-100 p-2"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <span className="deal-span">Season-In</span>
                      <h3 className="deal-h3">All Weather Attire</h3>
                      <p className="deal-p">
                        It never matter which season it is We got you covered.
                        Explore Now.
                      </p>
                      <button className="button-deal btn mt-3">
                        <a href="/shop" className="text-black">
                          Learn More
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Review component carousel */}
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
