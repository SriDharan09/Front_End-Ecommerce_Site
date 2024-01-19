import React from "react";
import { PiPhoneCallFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { MdOutgoingMail } from "react-icons/md";
import logo from "../assets/images/logo-preview.png";
import { BsBookmarkHeart } from "react-icons/bs";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <header className="header-top-strip p-1 px-3 shadow-md ">
        <div className="container-xxl fluid">
          <div className="row align-items-center">
            <div className="col-6">
              <p>Free Shipping Over $100</p>
            </div>
            <div className="col-6 d-flex justify-content-between">
              <div>
                <a href="tel:+9485132058">Call Us: +9485132058</a>
              </div>
              <div>
                <Link>
                  <PiPhoneCallFill className="fs-3 mx-4 " />
                </Link>
                <Link>
                  <MdOutgoingMail className="fs-3 mx-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper px-3 ">
        <div className="container-xxl" style={{ marginLeft: 0 }}>
          <div className="row">
            <div className="col-2 m-auto text-center">
              <Link to="/">
                <img src={logo} alt="Brand Logo" className="img-fluid logo " />
              </Link>
            </div>

            <div className="col-3 d-flex  align-items-center ">
              <div className="input-group ">
                <span class="input-group-text" id="basic-addon1">
                  All
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for Products..."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <button className="input-group-text" id="basic-addon2">
                  Search
                </button>
              </div>
            </div>
            <div className=" nav-links col-4 d-flex align-items-center justify-content-between text-center m-auto">
              <Link to={"/"}>Home</Link>
              <Link to={"shop"}>Shop</Link>
              <Link to={"blog"}>Blog</Link>
              <Link to={"about"}>About</Link>
              <Link to={"contact"}>Contact</Link>
            </div>
            <div className="nav-links-nav col-3 d-flex align-items-center justify-content-around ">
              <Link to={"/wishlist"} className="d-flex ">
                <BsBookmarkHeart className="fs-4 mx-2" />
                <p>Wishlist</p>
              </Link>
              <Link to={"/login"} className="d-flex">
                <RiAccountPinCircleLine className="fs-4 mx-2" />
                <p>Account</p>
              </Link>
              <Link to={"/cart"} className="d-flex">
                <RiShoppingCartLine className="fs-4 mx-2" />
                <p>Cart</p>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
