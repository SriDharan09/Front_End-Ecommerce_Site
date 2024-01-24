import React, { useContext, useState } from "react";

import { CiMail } from "react-icons/ci";
import { BiPhoneCall } from "react-icons/bi";

import { VscAccount } from "react-icons/vsc";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo-preview.png";
import { ShopContext } from "../components/shopContext";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { getTotalCartProducts } = useContext(ShopContext);
  const totalProducts = getTotalCartProducts();
  const location = useLocation();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const mail = "sridharselvaraj02@gmail";
  return (
    <>
      <header className="navbar-top p-2 ">
        <div className="  container">
          <div className="row">
            {/* Mobile top bar View */}
            <div className="d-flex align-items-center justify-content-between d-none d-md-flex">
              <div className="col-md-8 me-auto">
                <p className="text-black">Free Shipping Over ₹999</p>
              </div>
              <div className="col-md-2">
                <a href="tel:+">Call us at 6345678920</a>
              </div>
              <div className="col-md">
                <a href={`mailto:${mail}`} className="links fs-4 mx-3">
                  <CiMail />
                </a>
                <a href="tel:+63825678920" className="links fs-4">
                  <BiPhoneCall />
                </a>
              </div>
            </div>
            {/* Desktop top bar View */}
            <div className="d-flex align-items-center  justify-content-between d-md-none">
              <div className="col-md-6 me-auto">
                <p>Save Upto ₹999</p>
              </div>
              <div className="col-md-2 m-auto">
                <a href="tel:+">Call us</a>
              </div>
              <div className="col-md-2 m-auto ">
                <Link className="links fs-4">
                  <CiMail />
                </Link>
                <Link className="links fs-4 ">
                  <BiPhoneCall />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="navbar-middle header-upper sticky-top  ">
        <div className="container-xxl">
          <div className="row align-items-center m-0">
            <div className="col-md-2 d-flex justify-content-center">
              {/* Hamburger icon */}
              <button
                className="navbar-toggler d-md-none "
                type="button"
                onClick={toggleMenu}
              >
                <span className="navbar-toggler-icon">
                  {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
                </span>
              </button>

              <Link to="/">
                <img src={logo} alt="logo" className="img-fluid logo" />
              </Link>

              {/* Cart icon */}
              <button className="cart-span home-icon fs-3 d-md-none">
                <Link
                  to="cart"
                  className={
                    location.pathname === "/cart" ? "active" : "not-active"
                  }
                >
                  <div className="icon-container">
                    <CgShoppingCart className="home-svg shop" />
                    <b>
                      <span className="total-cart">{totalProducts}</span>
                    </b>
                  </div>
                </Link>
              </button>
              {/* Account icon */}
              <button className="cart-span-2 home-icon d-md-none">
                <Link
                  to="login"
                  className={
                    location.pathname === "/login" ? "active" : "not-active"
                  }
                >
                  <VscAccount className="home-svg" />
                </Link>
              </button>
            </div>

            {/* Desktop menu */}
            <div className="col-md-10 row col-lg-10">
              <div className="col-md-3 m-auto">
                {/* Search bar */}
                <div className="input-group d-none d-md-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Find products ..."
                    aria-label="Find products ..."
                    aria-describedby="basic-addon2"
                  />
                  <button className="input-group-text" id="basic-addon2">
                    search
                  </button>
                </div>
              </div>
              {/* Navbar */}
              <div className="col-md-6 m-auto">
                <div className="menu-links mt-2 d-none d-md-flex d-lg-flex">
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/"
                      className={
                        location.pathname === "/" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      Home
                    </NavLink>
                  </div>
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/shop"
                      className={
                        location.pathname === "/shop" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      Shop
                    </NavLink>
                  </div>
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/blog"
                      className={
                        location.pathname === "/blog" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      Blog
                    </NavLink>
                  </div>
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/about"
                      className={
                        location.pathname === "/about" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      About
                    </NavLink>
                  </div>
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/contact"
                      className={
                        location.pathname === "/contact"
                          ? "active"
                          : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="row d-flex justify-content-center">
                  <div className="col-12 col-md-2 d-none d-md-flex d-lg-flex m-auto">
                    <div
                      className={
                        location.pathname === "login" ? "active" : "not-active"
                      }
                    >
                      <Link
                        onClick={toggleMenu}
                        to="/login"
                        className="d-flex align-items-center color-nav me-3"
                      >
                        <VscAccount className="me-1 fs-2" />
                      </Link>
                    </div>
                    <div
                      className={
                        location.pathname === "cart" ? "active" : "not-active"
                      }
                    >
                      <Link
                        onClick={toggleMenu}
                        to="/cart"
                        className="d-flex align-items-center color-nav me-3 cart-span-one"
                      >
                        <CgShoppingCart className="me-1 fs-2" />
                        <div>
                          <p>
                            <b>
                              <span>{totalProducts}</span>
                            </b>
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile drop-down menu */}
            {showMenu && (
              <div className="col-md-10 d-md-none mt-3">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Find products ..."
                    aria-label="Find products ..."
                    aria-describedby="basic-addon2"
                  />
                  <button className="input-group-text" id="basic-addon2">
                    search
                  </button>
                </div>
                <div className="menu-links mt-2">
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/" ? "active" : "not-active"
                      }
                      to="/"
                      onClick={toggleMenu}
                    >
                      Home
                    </NavLink>
                  </div>
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/shop" ? "active" : "not-active"
                      }
                      to="/shop"
                      onClick={toggleMenu}
                    >
                      Shop
                    </NavLink>
                  </div>
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/blog" ? "active" : "not-active"
                      }
                      to="/blog"
                      onClick={toggleMenu}
                    >
                      Blog
                    </NavLink>
                  </div>
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/about" ? "active" : "not-active"
                      }
                      to="/about"
                      onClick={toggleMenu}
                    >
                      About
                    </NavLink>
                  </div>
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/contact"
                          ? "active"
                          : "not-active"
                      }
                      to="/contact"
                      onClick={toggleMenu}
                    >
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
