import React from "react";

const DeliveryPage = () => {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="delivery-page" style={{ border: "1px solid black" }}>
          <h1 className="text-center">Delivery Information</h1>

          <p className="text-center">
            We strive to provide reliable and efficient delivery services for
            your orders. Here are some key points regarding our delivery
            process:
          </p>

          <h2>Shipping Methods</h2>
          <p className="mb-3">
            We offer various shipping methods to cater to your preferences.
            During the checkout process, you can choose from standard,
            expedited, or express shipping options based on your delivery needs.
          </p>

          <h2>Delivery Times</h2>
          <p className="mb-3">
            Delivery times may vary depending on the selected shipping method
            and your location. Standard shipping typically takes 5 business
            days, expedited shipping takes 3 business days, and express shipping
            delivers within 1 day. Please note that these are estimated delivery
            times.
          </p>

          <h2>Tracking Your Order</h2>
          <p className="mb-3">
            Once your order has been shipped, you will receive a confirmation
            email containing a tracking number. You can use this tracking number
            to monitor the status and location of your package on our website or
            the carrier's tracking portal.
          </p>

          <h2>Shipping Costs</h2>
          <p className="mb-3">
            Shipping costs are calculated based on the chosen shipping method
            and the delivery address. The total shipping cost will be displayed
            during the checkout process before you complete your purchase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
