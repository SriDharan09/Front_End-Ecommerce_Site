import React from "react";
import { Link } from "react-router-dom";
import PlayStore from "../assets/images/pay/play.jpg";
import AppStore from "../assets/images/pay/app.jpg";
import Payment from "../assets/images/pay/pay.png";

import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* NEWS LETTER */}
      <section className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex justify-content-between p-5 news-letter ">
            <div className="col-4 text-center letter">
              <h2 className="text-black letter-h">Sign up for News Letter</h2>
              <p className="text-black letter-p">
                Get email updates on all our{" "}
                <span className="text-success h5 letter-s">special offers</span>
              </p>
            </div>
            <div className="col-8 ">
              <div className="input-group mb-2 p-4 letter-input-group">
                <input
                  type="text"
                  className="form-control letter-input p-2 wider-input"
                  placeholder="Mail Id :"
                  aria-label="Mail Id : "
                  aria-describedby="basic-addon2"
                />
                <Link
                  className="input-group-text letter-input1 wider-link"
                  id="basic-addon2"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          <hr className="m-4" />
        </div>
      </section>

      <footer className="footer footer-info p-4  ">
        <div className="container-xxl ">
          <div className="row">
            {/*Contact Us */}
            <div className="col-md-4 col-12 d-flex flex-column ">
              <h3 className="mb-4">Contact Us..</h3>
              <div className="footer-details">
                <p className="mb-3">
                  <b>Address:</b> Bangalore , Near Nexus Mall.
                </p>
                <p className="mb-3">
                  <b>Phone:</b> <a href="tel:+9485132058">+9485132058</a>
                </p>
                <p className="mb-5">
                  <b>Customer Care Hours:</b> From 8 a.m to 9 p.m
                </p>
                <p className="mb-3">
                  <b>Follow the Developer: </b>
                </p>
                <div className=" col-6  mb-3 social-links d-flex justify-content-around">
                  <Link
                    className="fs-3 "
                    to={"https://github.com/SriDharan09/"}
                  >
                    <FaGithub />
                  </Link>
                  <Link
                    className="fs-3 "
                    to={
                      "https://www.facebook.com/sridhar.kannan.3994?mibextid=ZbWKwL"
                    }
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    className="fs-3 "
                    to={
                      "https://www.instagram.com/s.r.i_dhar?igsh=b216djVyZ3M5djZu"
                    }
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    className="fs-3 "
                    to={"https://www.linkedin.com/in/sridhars9/"}
                  >
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>
            {/*About */}
            <div className="col-md-2 col-12 ">
              <h3 className="mb-4">About</h3>
              <div className="footer-details d-flex flex-column">
                <Link className="mb-3 text-black footer-links">Delivery</Link>
                <Link to={"/about"} className="mb-3 text-black footer-links">
                  About us
                </Link>
                <Link to={"/contact"} className="mb-3 text-black footer-links">
                  Customer Support
                </Link>
                <Link className="mb-3 text-black footer-links">
                  Privacy Policy
                </Link>
                <Link className="mb-3 text-black footer-links">
                  Terms & Conditions
                </Link>
              </div>
            </div>
            {/*Account */}
            <div className="col-md-2 col-12 ">
              <h3 className="mb-4">Account</h3>
              <div className="footer-details d-flex flex-column">
                <Link className="mb-3 text-black footer-links">Profile</Link>
                <Link to={"/cart"} className="mb-3 text-black footer-links">
                  View Cart
                </Link>
                <Link to={"/login"} className="mb-3 text-black footer-links">
                  My Orders
                </Link>
                <Link className="mb-3 text-black footer-links">
                  My Wishlist
                </Link>
                <Link className="mb-3 text-black footer-links">Help</Link>
                <Link className="mb-3 text-black footer-links">
                  Offers & Coupons
                </Link>
              </div>
            </div>
            {/*Payment */}
            <div className="col-md-4 col-12">
              <h3 className="mb-3">Install Our App</h3>
              <p>Available on Play Store & App Store</p>
              <div className="pay">
                <Link to={"https://play.google.com/store"}>
                  <img
                    className="img-fluid p-4 "
                    src={PlayStore}
                    alt="Play store Link"
                  />
                </Link>
                <Link to={"https://www.apple.com/in/app-store/"}>
                  <img
                    className="img-fluid p-4 my-1"
                    src={AppStore}
                    alt="Play store Link"
                  />
                </Link>
              </div>
              <p className="mb-4">Payment Methods</p>
              <Link
                to={"https://customerportal.mastercard.com/login"}
                className="pay"
              >
                <img className="img-fluid " src={Payment} alt="Payment" />
              </Link>
            </div>
          </div>
          <hr />
          {/* copyright */}
          <div className="row">
            <div className="col-md-9 col-5">
              <p className="rights">
                &copy; {new Date().getFullYear()} All Rights Reserved
              </p>
            </div>
            <div className="col-md-3 col-7 d-flex justify-content-end">
              <Link className="mx-3 text-black">Privacy Policy</Link>
              <Link className=" text-black">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
