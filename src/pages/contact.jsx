import React, { useState } from "react";
// import { Link } from "react-router-dom";
const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    mail: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary form validation here
    // For simplicity, let's assume the form is always valid

    // Display success message with the user's first name
    setSuccessMessage(`Message sent successfully, ${formData.fname}!`);

    // Clear the form fields
    setFormData({
      fname: "",
      lname: "",
      mail: "",
      message: "",
    });
    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  };
  return (
    <>
      {/* Contact Banner */}
      <section className="contact-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="text-end">
              <h1 className="text-light contact-head ">#Reach out to Us..</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Map and detail */}
      <section className="contact-info p-4 mt-5">
        <div className="d-flex align-items-center justify-content-center contact-card">
          <div className="col-sm-12 col-md-6 col-12">
            <map name="">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7243185568027!2d77.61660717523377!3d12.925431987385707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1457878c2ba1%3A0x745b6338672ed2a3!2sSJR%20Padukone%20Towers%2C%20100%20Feet%20Rd%2C%20Santhosapuram%2C%20Koramangala%202nd%20Block%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka%20560034!5e0!3m2!1sen!2sin!4v1705912672601!5m2!1sen!2sin"
                width="600"
                height="450"
                loading="lazy"
                className="contact-map"
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </map>
          </div>

          <div className=" d-flex align-items-center justify-content-center contact-details ">
            <div className="col-md-6 col-12 w-100 shadow  p-5 c">
              <div className="contact-info">
                <h1 className="text-center contact-title">Contact Info</h1>
                <div className="footer-details">
                  <p className="mb-3 h5">
                    <b>Address:</b> Bangalore , Near Nexus Mall.
                  </p>
                  <p className="mb-3 h5">
                    <b>Phone:</b> <a href="tel:+9485132058">+9485132058</a>
                  </p>
                  <p className="mb-5 h5">
                    <b>Customer Care Hours:</b> From 8 a.m to 9 p.m
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form (Leave us a message) Bootstrap comp */}
      <section className="contact-form">
        <div className="container-xxl">
          <div className="row">
            <h1 className="text-center mt-5 contact-heading">
              Leave us a message
            </h1>
            <div className="card mx-auto my-5 contact-form">
              <form className="form-padding">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="fname" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                      id="fname"
                      name="fname"
                      required
                      value={formData.fname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lname" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                      id="lname"
                      name="lname"
                      required
                      value={formData.lname}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="mail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Mail ID"
                    className="form-control"
                    id="mail"
                    name="mail"
                    required
                    value={formData.mail}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Type your message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Leave a message here"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className=" d-flex justify-content-center align-items-center mx-auto btn btn-primary"
                >
                  Submit
                </button>
              </form>
              {successMessage && (
                <div className="text-success text-center mt-3">
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
