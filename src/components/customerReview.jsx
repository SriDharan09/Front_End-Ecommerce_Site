import React from "react";
import img1 from "../assets/images/button.png";
import img2 from "../assets/images/button.png";
import img3 from "../assets/images/button.png";

const customerReview = () => {
  return (
    <>
      <div className="container-xxl text-center">
        <div className="row">
          <h1>What our customers say..</h1>
          <div
            id="carouselExampleInterval"
            className="carousel slide w-50 mx-auto fs-5 mt-5"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="4000">
                <img src={img1} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block text-black">
                  <h5>Slide 1 label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="4000">
                <img src={img2} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block text-black">
                  <h5>Slide 2 label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="4000">
                <img src={img3} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block text-black">
                  <h5>Slide 3 label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
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
                className="carousel-control-next-icon"
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
