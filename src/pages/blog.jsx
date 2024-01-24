import React from "react";
import img1 from "../assets/images/blog/b1.jpg";
import img2 from "../assets/images/blog/b3.jpg";
import img3 from "../assets/images/blog/b4.jpg";

const blog = () => {
  return (
    <>
      {/* Blog banner */}
      <section className="blog-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center">
              <h1 className="text-white">#Read More</h1>
              <p className="text-white h4">
                Get to know what our customers are saying..
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Details */}

      <section className="blog-details p-5">
        <div className="container-xxl">
          <div className="row">
            {/* First Blog Card */}
            <div className="card mb-4 mt-3 blog-details-page">
              <div className="p-4 d-flex flex-column flex-sm-row">
                <div className="col-12 col-sm-3 mb-3 mb-sm-0 text-center">
                  <img
                    src={img1}
                    alt=""
                    className="img-fluid img-rounded-start"
                  />
                </div>

                <div className="card-body col-12 col-sm-9 p-4">
                  <h3 className="card-title">
                    <b>"Fashion Forward: Embracing Timeless Trends"</b>
                  </h3>
                  <p className="text-muted text-end">
                    Posted by: Sophia Rodriguez
                  </p>

                  <p className="my-3">
                    Dive into the world of fashion as we explore timeless trends
                    that continue to make a statement. From classic pieces to
                    modern twists, discover how to curate a wardrobe that stands
                    the test of time.
                  </p>
                  <button className="button-deal  blog-btn btn mt-3">
                    Read More
                  </button>
                  <div className="card-footer mt-4">
                    <p className="text-muted text-center blog-p">
                      Last updated :
                      <span>{new Date().toLocaleDateString()}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Blog Card */}
            <div className="card mb-4 mt-3 blog-details-page">
              <div className="p-4 d-flex flex-column flex-sm-row">
                <div className="col-12 col-sm-3 mb-3 mb-sm-0 text-center">
                  <img
                    src={img2}
                    alt=""
                    className="img-fluid img-rounded-start"
                  />
                </div>

                <div className="card-body col-12 col-sm-9 p-4">
                  <h3 className="card-title">
                    <b>"Sustainable Style: Fashion with a Purpose"</b>
                  </h3>
                  <p className="text-muted text-end">Posted by: Ethan Carter</p>

                  <p className="my-3">
                    Explore the intersection of fashion and sustainability.
                    Learn about eco-friendly materials, ethical fashion choices,
                    and how to make environmentally conscious decisions without
                    compromising on style. Join the movement towards a more
                    sustainable and stylish future.
                  </p>
                  <button className="button-deal  blog-btn btn mt-3">
                    Read More
                  </button>
                  <div className="card-footer mt-4">
                    <p className="text-muted text-center blog-p">
                      Last updated :
                      <span>{new Date().toLocaleDateString()}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Blog Card */}
            <div className="card mb-4 mt-3 blog-details-page">
              <div className="p-4 d-flex flex-column flex-sm-row">
                <div className="col-12 col-sm-3 mb-3 mb-sm-0 text-center">
                  <img
                    src={img3}
                    alt=""
                    className="img-fluid img-rounded-start"
                  />
                </div>

                <div className="card-body col-12 col-sm-9 p-4">
                  <h3 className="card-title">
                    <b>"Express Yourself: The Power of Personal Style"</b>
                  </h3>
                  <p className="text-muted text-end">
                    Posted by: Olivia Thompson
                  </p>

                  <p className="my-3">
                    Unleash the power of personal style and discover how it goes
                    beyond clothing. From expressing individuality to boosting
                    confidence, this blog delves into the psychology of fashion
                    and how your style choices can make a significant impact on
                    your daily life.
                  </p>
                  <button className="button-deal  blog-btn btn mt-3">
                    Read More
                  </button>
                  <div className="card-footer mt-4">
                    <p className=" text-muted text-center blog-p ">
                      Last updated :
                      <span>{new Date().toLocaleDateString()}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default blog;
