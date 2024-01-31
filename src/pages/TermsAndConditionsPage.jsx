import React from "react";

const TermsAndConditionsPage = () => {
  return (
    <div className="container p-5">
      <div className="row">
        <div
          className="terms-and-conditions"
          style={{ border: "1px solid black" }}
        >
          <h1 className="text-center" style={{ marginBottom: "20px" }}>
            Terms and Conditions
          </h1>

          <p className="text-center">
            By accessing this website, you are agreeing to be bound by these
            Terms and Conditions of Use, all applicable laws, and regulations,
            and agree that you are responsible for compliance with any
            applicable local laws. If you do not agree with any of these terms,
            you are prohibited from using or accessing this site.
          </p>

          <h2 className="mb-3" style={{ marginTop: "20px" }}>
            Use License
          </h2>

          <ol>
            <li>
              Permission is granted to temporarily download one copy of the
              materials (information or software) on this website for personal,
              non-commercial transitory viewing only.
            </li>
            <li>
              This is the grant of a license, not a transfer of title, and under
              this license, you may not:
              <ul>
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose;</li>
                <li>
                  attempt to decompile or reverse engineer any software
                  contained on this website;
                </li>
                <li>
                  remove any copyright or other proprietary notations from the
                  materials; or
                </li>
                <li>
                  transfer the materials to another person or "mirror" the
                  materials on any other server.
                </li>
              </ul>
            </li>
          </ol>

          {/* Add more sections as needed for your specific Terms and Conditions content */}

          <h2 style={{ marginTop: "20px" }}>Contact Us</h2>

          <p className="mb-5">
            If you have any questions about these Terms and Conditions, please
            contact us at{" "}
            <span className="text-decoration-underline text-danger">
              support@Enchantique.com.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
