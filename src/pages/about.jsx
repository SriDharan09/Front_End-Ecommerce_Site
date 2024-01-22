import React from "react";
import img from "../assets/images/about/a6.jpg";
import video from "../assets/images/about/1.mp4";
import { Link } from "react-router-dom";
import Hero from "../components/hero";
import Marquee from "react-fast-marquee";

import icon1 from "../assets/images/icons/icon1.png";
import icon2 from "../assets/images/icons/icon2.png";
import icon3 from "../assets/images/icons/icon3.png";
import icon4 from "../assets/images/icons/icon4.png";
import icon5 from "../assets/images/icons/icon5.png";
import icon6 from "../assets/images/icons/icon6.png";

const about = () => {
  return (
    <>
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

      <section className="know-us p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex">
              <div className="col-6">
                <img src={img} alt="" className="img-fluid p-3" />
              </div>
              <div className="col-6 d-flex flex-column text-center justify-content-center p-3">
                <h1>EnchantiQue</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Neque quod iusto illum cupiditate dolor, provident quibusdam
                  laborum expedita accusantium voluptatem consectetur, officiis
                  esse iure. Perferendis repellendus non itaque hic temporibus.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur alias molestias laborum adipisci vero, consectetur
                  incidunt iste distinctio eos harum voluptas quam similique
                  ratione unde omnis? Amet at commodi blanditiis?
                </p>
                <div>
                  <Link className="btn btn-light" to="/contact">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="download p-3">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex justify-content-center align-items-center">
              <h2 className="text-white mb-4">
                Download Our <Link>App</Link>
              </h2>
            </div>

            <video
              className="w-50 mx-auto mb-5"
              muted
              loop
              autoPlay
              src={video}
            ></video>
          </div>
        </div>
      </section>

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
