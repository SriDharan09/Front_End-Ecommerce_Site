import React from "react";
import ViewDetails from "../components/viewDetails";

const viewProduct = () => {
  return (
    <>
    {/* Viewing single product ViewDetails.jsx  */}
      <section className="details">
        <div className="container-xxl">
          <div className="row">
            <ViewDetails />
          </div>
        </div>
      </section>
    </>
  );
};

export default viewProduct;
