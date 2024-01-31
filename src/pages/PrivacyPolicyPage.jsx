import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="container p-5 ">
      <div className="row">
        <div className="privacy-policy " style={{ border: "1px solid black" }}>
          <h1 className="text-center">Privacy Policy</h1>

          <p className="text-center">
            This Privacy Policy outlines the types of personal information that
            is received and collected by our website and how it is used.
          </p>

          <h2>Return Policy</h2>

          <p className="mb-3">
            At Enchantique, we want you to be completely satisfied with your
            purchase. If you are not satisfied with your purchase, we offer a
            hassle-free return policy to ensure your shopping experience is
            enjoyable and risk-free.If you receive a damaged or defective item,
            please contact our customer support team immediately for assistance.
            We will provide instructions for returning the item or offer a
            replacement.
            <br />
            <br />
            <li className="mb-3">
              Once your return is received and inspected, we will process your
              refund within 5 business days. The refund will be issued to the
              original payment method used for the purchase.
            </li>
            <span className="h5 mb-3">
              The following items are non-returnable:
            </span>
            <li className="mt-3">
              Items that are damaged, defective, or not as described. Once tag
              is removed it is non-returnable.
            </li>
            <li>
              Undergarments, swimwear, and intimate apparel for hygiene reasons.
            </li>
          </p>
          <h2>Information Collection and Use</h2>

          <p className="mb-3">
            We may collect personal information when you fill out forms or
            interact with our website. The information collected may include
            your name, email, and any other details you provide.
          </p>

          <h2>Log Data</h2>

          <p className="mb-3">
            Like many site operators, we collect information that your browser
            sends whenever you visit our site. This Log Data may include
            information such as your computer's Internet Protocol ("IP")
            address, browser type, browser version, and the pages of our site
            that you visit.
          </p>

          <h2>Cookies</h2>

          <p className="mb-3">
            Cookies are files with small amounts of data that are sent to your
            browser from a website and stored on your computer's hard drive. We
            use cookies to collect information for improving our services.
          </p>

          {/* Add more sections as needed for your specific Privacy Policy content */}

          <h2>Contact Us</h2>

          <p className="mb-3">
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <span className="text-decoration-underline text-danger">
              support@Enchantique.com.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
