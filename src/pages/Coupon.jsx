import React from "react";

const Coupon = () => {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="offers-page" style={styles.pageContainer}>
          <h1 style={styles.heading}>Offers & Coupons</h1>

          <div style={styles.offerContainer}>
            <div style={styles.coupon}>
              <h2 style={styles.couponHeading}>Current Coupon</h2>
              <p style={styles.couponCode}>"Discount50"</p>
              <p style={styles.couponDescription}>
                Enjoy a 50% discount on your next purchase. Use code
                "Discount50" at Checkout page / Product page.
              </p>
            </div>
          </div>

          <div style={styles.upcomingOffers}>
            <h2 style={styles.upcomingHeading}>Upcoming Offers</h2>
            <p style={styles.upcomingText}>
              Stay tuned for more exciting offers and discounts coming soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  offerContainer: {
    marginBottom: "30px",
  },
  coupon: {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  couponHeading: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "10px",
  },
  couponCode: {
    fontSize: "20px",
    color: "#e44d26",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  couponDescription: {
    fontSize: "16px",
    color: "#666",
  },
  upcomingOffers: {
    marginTop: "30px",
  },
  upcomingHeading: {
    fontSize: "22px",
    color: "#333",
    marginBottom: "10px",
  },
  upcomingText: {
    fontSize: "16px",
    color: "#666",
  },
};

export default Coupon;
