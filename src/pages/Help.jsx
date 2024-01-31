import React, { useState } from "react";
import { Link } from "react-router-dom";

const Help = () => {
  const [faqItems, setFaqItems] = useState([
    {
      id: 1,
      question: "How can I track my order?",
      answer:
        "You can track your order by visiting the 'Order Tracking' page on our website and entering your order number and email address.",
      isOpen: false,
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer:
        "We accept a variety of payment methods, including credit/debit cards and PayPal. You can find the full list of accepted payment methods in the 'Payment Options' section during checkout.",
      isOpen: false,
    },
    {
      id: 3,
      question: "How can I return an item?",
      answer:
        "To return an item, please visit our 'Returns' page for detailed instructions. Make sure to check our return policy for eligibility criteria and timeframes.",
      isOpen: false,
    },
    {
      id: 4,
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to many countries. During the checkout process, you can select your country, and the shipping options will be displayed accordingly.",
      isOpen: false,
    },
    {
      id: 5,
      question: "Can I change or cancel my order after placing it?",
      answer:
        "Once an order is placed, it is processed promptly to ensure quick delivery. Therefore, changes or cancellations are not possible. Please review your order carefully before confirming the purchase.",
      isOpen: false,
    },
    {
      id: 6,
      question: "How can I contact customer support?",
      answer:
        "Our customer support team is available 24/7. You can reach us through our 'Contact Us' page on the website or by sending an email to Enchantique@support.com",
      isOpen: false,
    },
    {
      id: 7,
      question: "What is your return policy?",
      answer:
        "Our return policy allows you to return items within 7 days of purchase. Please visit our 'Returns' page for detailed information on how to initiate a return and the eligibility criteria.",
      isOpen: false,
    },
    {
      id: 8,
      question: "Are there any additional charges for international orders?",
      answer:
        "International orders may be subject to customs duties and taxes. These charges are determined by the destination country and are the responsibility of the customer. Please check with your local customs office for more information.",
      isOpen: false,
    },
    {
      id: 9,
      question: "How do I reset my password?",
      answer:
        "You can reset your password by clicking on the 'Forgot Password' link on the login page. Follow the instructions sent to your registered email address to create a new password.",
      isOpen: false,
    },
    {
      id: 10,
      question: "Can I change my shipping address after placing the order?",
      answer:
        "Unfortunately, we cannot change the shipping address once the order is confirmed. Please ensure that the provided address is accurate before completing the purchase.",
      isOpen: false,
    },
    // Add more FAQ items as needed
  ]);
  const toggleOpen = (id) => {
    setFaqItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const styles = {
    faqContainer: {
      border: "1px solid black",
      padding: "20px",
    },
    faqQuestion: {
      cursor: "pointer",
      marginBottom: "8px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      backgroundColor: "#f9f9f9",
      transition: "background-color 0.3s ease",
    },
    faqAnswer: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      marginTop: "5px",
    },
    helpLink: {
      textAlign: "right",
      marginTop: "20px",
    },
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="faq-page " style={styles.faqContainer}>
          <h1 className="text-center mb-5">Frequently Asked Questions</h1>
          <ul className="list-unstyled ">
            {faqItems.map((item) => (
              <li key={item.id}>
                <div
                  className="faq-question mb-4 h6 text-center"
                  onClick={() => toggleOpen(item.id)}
                  style={styles.faqQuestion}
                >
                  <strong>{item.question}</strong>
                </div>
                {item.isOpen && (
                  <div
                    className="faq-answer mb-3 text-center"
                    style={styles.faqAnswer}
                  >
                    {item.answer}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div
            className="d-flex  justify-content-end align-items-end mx-5"
            style={styles.helpLink}
          >
            <Link className="btn btn-primary mb-4" to="/contact">
              For More Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
