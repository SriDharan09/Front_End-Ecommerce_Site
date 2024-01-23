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
              <div className="col-md-6 col-12 about-image">
                <img src={img} alt="" className="img-fluid p-3" />
              </div>
              <div className="col-md-6 col-12 about-section  d-flex flex-column text-center justify-content-center p-3">
                <h1>EnchantiQue</h1>
                <p className="mb-3">
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
