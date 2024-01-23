import React from "react";
import icon1 from "../assets/images/icons/icon1.png";
import icon2 from "../assets/images/icons/icon2.png";
import icon3 from "../assets/images/icons/icon3.png";
import icon4 from "../assets/images/icons/icon4.png";
import icon5 from "../assets/images/icons/icon5.png";
import icon6 from "../assets/images/icons/icon6.png";

const hero = () => {
  return (
    <>
      {/* Hero section */}
      <section className="hero p-3">
        <div className="container-xxl">
          <div className="row">
            {/* Hero Details */}
            
            <div className="hero-details d-flex text-center  ">
              <div className="card p-2 mx-3 px-3">
                <img src={icon1} alt="" className="img-fluid feature-img " />
                <p className="hero-para">Fast Orders</p>
              </div>
              <div className="card p-2 mx-3 px-3">
                <img src={icon2} alt="" className="img-fluid hero-img " />
                <p className="hero-para">Quick Delivery</p>
              </div>
              <div className="card p-2 mx-3 px-3">
                <img src={icon3} alt="" className="img-fluid hero-img" />
                <p className="hero-para">High Saves</p>
              </div>
              <div className="card p-2 mx-3 px-3">
                <img src={icon4} alt="" className="img-fluid hero-img" />
                <p className="hero-para">24/7 Support</p>
              </div>
              <div className="card p-2 mx-3 px-3">
                <img src={icon6} alt="" className="img-fluid hero-img" />
                <p className="hero-para">Certified seller</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default hero;
