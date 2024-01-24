import React from "react";
import img from "../assets/images/about/a6.jpg";
import video from "../assets/images/about/1.mp4";
import { Link } from "react-router-dom";
import Hero from "../components/hero";
import Marquee from "react-fast-marquee";

const about = () => {
  return (
    <>
      {/* About Banner */}
      <section className="about-wrapper p-5">
        <div className="container xxl">
          <div className="row">
            <div className="text-center">
              <h1 className="text-white">#Who Are We</h1>
              <p className="text-white fs-4 h5 ">Take a moment to know us..</p>
            </div>
          </div>
        </div>
      </section>

      {/*Who we are card  */}
      <section className="know-us p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex aboutt">
              <div className="col-md-6 col-12 about-image ">
                <img src={img} alt="" className="img-fluid p-3" />
              </div>
              <div className="col-md-6 col-12 about-section  d-flex flex-column text-center justify-content-center p-3">
                <h1>EnchantiQue</h1>
                <p className="mb-3">
                  Welcome to Enchantique – where style meets elegance, and every
                  dress tells a unique story. Founded with a passion for fashion
                  and a commitment to making every customer feel enchanting, we
                  are your go-to destination for the most captivating dresses
                  and timeless ensembles.
                  <br />
                  <br />
                  <span className="h5 ">Why EnchantiQue</span>
                  <li className="mt-3">
                    Why Enchantique: Quality Assurance: We prioritize quality in
                    every garment, promising you dresses that are not only
                    stylish but also crafted to perfection.
                  </li>{" "}
                  <li>
                    Global Trends: Stay ahead in the fashion game with our
                    curated collection that reflects the latest global trends.
                  </li>{" "}
                  <li>
                    Tailored Experiences: We believe that every customer is
                    unique. Our goal is to cater to your individual style
                    preferences and offer a personalized shopping experience.
                  </li>
                </p>
                <hr />
                <p className="text-muted">
                  Thank you for being a part of the our family. We invite you to
                  explore our enchanting world of dresses, where glamour knows
                  no bounds.
                </p>
                <p className=" text-danger mb-3">
                  Elegantly Yours,
                  <br /> The Enchantique Team
                </p>
                <div>
                  <Link className="btn btn-primary" to="/contact">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download App */}
      <section className="download p-3">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex justify-content-center align-items-center">
              <h2 className="text-white mb-4">
                Download Our <Link>App</Link>
              </h2>
            </div>

            <video
              className="mx-auto mb-5 video d-block d-sm-none w-100" // Full width on small devices
              muted
              loop
              autoPlay
              src={video}
            ></video>

            <video
              className="mx-auto mb-5 video d-none d-sm-block w-50" // 50% width on larger devices
              muted
              loop
              autoPlay
              src={video}
            ></video>
          </div>
        </div>
      </section>

      {/* Marquee (animated Hero component that moves across the screen) */}
      <section className="marquee p-5 ">
        <div className="container-xxl">
          <div className="row d-flex align-items-center justify-content-center ">
            <Marquee className="p-2 shadow  ">
              <Hero />
            </Marquee>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
