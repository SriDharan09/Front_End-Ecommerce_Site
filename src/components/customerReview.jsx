import React from "react";
import img1 from "../assets/images/button.png";
import img2 from "../assets/images/button.png";
import img3 from "../assets/images/button.png";

const customerReview = () => {
  return (
    <>
      {/* Customer Review Component */}
      <div className="container-xxl text-center">
        <div className="row">
          <h1 className="review-heading mb-5">What our customers say..</h1>
          {/* Carousel Component */}
          <div
            id="carouselExampleInterval"
            className="carousel slide w-50 mx-auto fs-5 mt-5"
            data-bs-ride="carousel"
          >
            {/* Carousel Items */}
            <div className="carousel-inner ">
              {/* Auto play every 4seconds */}
              <div className="carousel-item active" data-bs-interval="4000">
                <img
                  src={img1}
                  className="d-block carousel-img w-100"
                  alt="..."
                />
                <div className="carousel-caption  d-md-block text-black">
                  <h5>Alex Johnson</h5>
                  <p>Fast delivery and impressive customer support. </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="4000">
                <img src={img2} className="d-block w-100" alt="..." />
                <div className="carousel-caption  d-md-block text-black">
                  <h5>Emily Brown</h5>
                  <p>The product exceeded my expectations. Very satisfied.</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="4000">
                <img src={img3} className="d-block w-100" alt="..." />
                <div className="carousel-caption  d-md-block text-black">
                  <h5>Mike Davis</h5>
                  <p>Easy ordering process and fantastic product selection.</p>
                </div>
              </div>
            </div>

            {/* Carousel Control buttons */}
            <button
              className="carousel-control-prev "
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bg-black"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bg-black"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default customerReview;
