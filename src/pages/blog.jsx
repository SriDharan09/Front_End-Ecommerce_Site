import React from "react";
import img1 from "../assets/images/blog/b1.jpg";
import img2 from "../assets/images/blog/b3.jpg";
import img3 from "../assets/images/blog/b4.jpg";

const blog = () => {
  return (
    <>
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

      <section className="blog-details p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center my-4">
              <h1 className="fs-2 mb-3">Exlpore More on Our Library</h1>
              <p>Let us know what you think</p>
            </div>
            <div className=" card mb-4 mt-3 blog-details-page">
              <div className="p-4 d-flex">
                <div className="col-3">
                  <img
                    src={img1}
                    alt=""
                    className="img-fluid img-rounded-start"
                  />
                </div>

                <div className="card-body col-9 p-4">
                  <h3 className="card-title">
                    <b>Marry kelvin</b>
                  </h3>

                  <p className="my-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Suscipit molestias, officia maxime commodi a ex accusantium
                    cupiditate perferendis eaque consequatur reprehenderit nobis
                    eligendi temporibus. Voluptate nulla dolorum nesciunt dicta
                    quasi!
                  </p>
                  <button className="button-deal btn mt-3">Read More</button>
                  <div className="card-footer mt-4">
                    <p className="text-end ">
                      Last updated :
                      <span>{new Date().toLocaleDateString()}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" card mb-4  blog-details-page">
              <div className="p-4 d-flex">
                <div className="col-3">
                  <img
                    src={img2}
                    alt=""
                    className="img-fluid img-rounded-start"
                  />
                </div>

                <div className="card-body col-9 p-4">
                  <h3 className="card-title">
                    <b>Marry kelvin</b>
                  </h3>

                  <p className="my-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Suscipit molestias, officia maxime commodi a ex accusantium
                    cupiditate perferendis eaque consequatur reprehenderit nobis
                    eligendi temporibus. Voluptate nulla dolorum nesciunt dicta
                    quasi!
                  </p>
                  <button className="button-deal btn mt-3">Read More</button>
                  <div className="card-footer mt-4">
                    <p className="text-end ">
                      Last updated :
                      <span>{new Date("2023-12-25").toLocaleDateString()}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" card mb-4  blog-details-page">
              <div className="p-4 d-flex">
                <div className="col-3">
                  <img
                    src={img3}
                    alt=""
                    className="img-fluid img-rounded-start"
                  />
                </div>

                <div className="card-body col-9 p-4">
                  <h3 className="card-title">
                    <b>Marry kelvin</b>
                  </h3>

                  <p className="my-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Suscipit molestias, officia maxime commodi a ex accusantium
                    cupiditate perferendis eaque consequatur reprehenderit nobis
                    eligendi temporibus. Voluptate nulla dolorum nesciunt dicta
                    quasi!
                  </p>
                  <button className="button-deal btn mt-3">Read More</button>
                  <div className="card-footer mt-4">
                    <p className="text-end ">
                      Last updated :
                      <span>{new Date("2023-11-25").toLocaleDateString()}</span>
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
