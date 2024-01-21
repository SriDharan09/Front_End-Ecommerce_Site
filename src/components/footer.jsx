import React from "react";
import { Link } from "react-router-dom";
import PlayStore from "../assets/images/pay/play.jpg";
import AppStore from "../assets/images/pay/app.jpg";
import Payment from "../assets/images/pay/pay.png";

import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex justify-content-between p-5 news-letter ">
            <div className="col-4 text-center">
              <h2 className="text-black">Sign up for News Letter</h2>
              <p className="text-black">
                Get email updates on all our{" "}
                <span className="text-success h5">special offers</span>
              </p>
            </div>
            <div className="col-8 ">
              <div className="input-group mb-2 p-4">
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Mail Id : Eg(xXrQK@example.com)"
                  aria-label="Mail Id : xXrQK@example.com"
                  aria-describedby="basic-addon2"
                />
                <Link className="input-group-text" id="basic-addon2">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          <hr className="m-4" />
        </div>
      </section>

      <footer className="footer p-4 ">
        <div className="container-xxl ">
          <div className="row">
            {/*Contact Us */}
            <div className="col-4 d-flex flex-column ">
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
                  <Link className="fs-3 " to={"/"}>
                    <FaFacebook />
                  </Link>
                  <Link className="fs-3 " to={"/"}>
                    <FaInstagram />
                  </Link>
                  <Link className="fs-3 " to={"/"}>
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>
            {/*About */}
            <div className="col-2 ">
              <h3 className="mb-4">About</h3>
              <div className="footer-details d-flex flex-column">
                <Link className="mb-3 text-black">Delivery</Link>
                <Link className="mb-3 text-black">About us</Link>
                <Link className="mb-3 text-black">Customer Support</Link>
                <Link className="mb-3 text-black">Privacy Policy</Link>
                <Link className="mb-3 text-black">Terms & Conditions</Link>
              </div>
            </div>
            {/*Account */}
            <div className="col-2 ">
              <h3 className="mb-4">Account</h3>
              <div className="footer-details d-flex flex-column">
                <Link className="mb-3 text-black">Profile</Link>
                <Link className="mb-3 text-black">View Cart</Link>
                <Link className="mb-3 text-black">My Orders</Link>
                <Link className="mb-3 text-black">My Wishlist</Link>
                <Link className="mb-3 text-black">Help</Link>
                <Link className="mb-3 text-black">Offers & Coupons</Link>
              </div>
            </div>
            {/*Payment */}
            <div className="col-4">
              <h3 className="mb-3">Install Our App</h3>
              <p>Available on Play Store & App Store</p>
              <div className="pay">
                <Link>
                  <img
                    className="img-fluid p-4 "
                    src={PlayStore}
                    alt="Play store Link"
                  />
                </Link>
                <Link>
                  <img
                    className="img-fluid p-4 my-1"
                    src={AppStore}
                    alt="Play store Link"
                  />
                </Link>
              </div>
              <p className="mb-4">Payment Methods</p>
              <Link className="pay">
                <img className="img-fluid " src={Payment} alt="Payment" />
              </Link>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-9">
              <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
            </div>
            <div className="col-3 d-flex justify-content-end">
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
