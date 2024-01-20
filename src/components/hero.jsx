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
      <section className="hero p-3">
        <div className="container-xxl">
          <div className="row">
            <div className="hero-details d-flex text-center  ">
              <div className="card p-2 mx-3 px-3">
                <img src={icon1} alt="" className="img-fluid" />
                <p>Fast Orders</p>
              </div>
              <div className="card p-2 mx-3 px-3">
                <img src={icon2} alt="" className="img-fluid" />
                <p>Quick Delivery</p>
              </div>
              <div className="card p-2 mx-3 px-3">
                <img src={icon3} alt="" className="img-fluid" />
                <p>High Saves</p>
              </div>
              <div className="card p-2 mx-3 px-3">
                <img src={icon4} alt="" className="img-fluid" />
                <p>24/7 Support</p>
              </div>
              <div className="card p-2 mx-3 px-3">
                <img src={icon6} alt="" className="img-fluid" />
                <p>Certified seller</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default hero;
