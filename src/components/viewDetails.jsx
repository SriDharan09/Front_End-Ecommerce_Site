import React, { useContext, useState } from "react";
import { ShopContext } from "../components/shopContext";
import { PRODUCTS, PRODUCTS1 } from "../components/products";
import ReactStarts from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ViewDetails = () => {
  const [coupon, setCoupon] = useState();

  const {
    updateCartItemCount,
    removeToCart,
    addToCart,
    cartItems,
    viewProductDetails,
    selectedProduct,
    appliedCoupon,
    applyCoupon,
    cartCouponPrice,
  } = useContext(ShopContext);

  const productId = selectedProduct || 0;
  const product =
    PRODUCTS.find((item) => item.id === productId) ||
    PRODUCTS1.find((item) => item.id === productId);

  const [selectedSize, setSelectedSize] = useState(null);

  const sizePrices = {
    S: product.price - 40,
    M: product.price - 32,
    L: product.price - 15,
    XL: product.price,
  };

  const cartItemCount = cartItems[productId];
  const originalPrice = product.price;

  // coupon starts
  const handleCoupon = (event) => {
    setCoupon(event.target.value);
  };
  const [discountPrice, setDiscountPrice] = useState(originalPrice);
  // const [appliedCoupon, setAppliedCoupon] = useState(false);

  const handleAddCoupon = () => {
    if (appliedCoupon) {
      alert("Coupon Already Applied");
      return;
    }

    if (coupon.trim().toLowerCase() === "discount50") {
      alert("Coupon Applied");
      const newOfferPrice = offerPrice / 2;
      cartCouponPrice(500);
      setDiscountPrice(newOfferPrice);
      applyCoupon();

      // product.price = newOfferPrice;
    } else {
      alert("Invalid Coupon");
    }
  };

  const offerPrice = selectedSize ? sizePrices[selectedSize] : originalPrice;
  // coupon Ends

  const handleSizeClick = (size) => {
    setSelectedSize((prevSize) => {
      const newSize = prevSize === size ? null : size;
      return newSize;
    });
    // product.price = sizePrices[size];
  };

  // product.price = offerPrice;

  return (
    <>
      {/* Viewing single product */}
      <div className="d-flex p-5  view-container ">
        {/* Single Image  selected with id as productId */}
        <div className="col-12 col-md-6 card view-img ">
          <img src={product.image} alt="" className="img-fluid p-5" />

          <button
            className="add-btn view-add mx-5"
            onClick={() => addToCart(productId)}
          >
            Add to Cart
            {cartItemCount > 0 && `(${cartItemCount})`}
          </button>
          <Link
            to={"/shop"}
            className="shoping text-center view-shop  mt-4 mx-5"
          >
            Continue Shopping
          </Link>
        </div>

        {/* product Details */}
        <div className="col-12 col-md-6 card mx-5">
          <div className="p-5 vieww">
            <span className="shadow-lg  p-2 mb-3 brand">{product.brand}</span>
            <h3 className="my-3 view-name">{product.name}</h3>
            <div className="card-details">
              <ReactStarts
                count={5}
                value={product.star}
                size={26}
                activeColor="#ffd700"
                isHalf={true}
              />
              <p className="my-3 h3 text-success">
                ₹ &nbsp;{appliedCoupon ? discountPrice : offerPrice}{" "}
                <strike className="text-danger h5">
                  ₹ {product.price * 2 + product.randomPrice}
                </strike>
              </p>

              {/* quantity */}
              <div className="text-center ">
                <p>Quantity</p>
                <div className="view-quantity">
                  <button
                    className="add-btn btnn mx-3 p-2"
                    onClick={() => addToCart(product.id)}
                  >
                    +
                  </button>

                  <input
                    className="qnty-show p-2"
                    readOnly
                    type="text"
                    value={cartItems[product.id]}
                    onChange={(e) =>
                      updateCartItemCount(Number(e.target.value), product.id)
                    }
                  />

                  <button
                    className="less-btn btnn  mx-3 p-2"
                    onClick={() => removeToCart(product.id)}
                  >
                    -
                  </button>
                </div>
              </div>

              {/* size section */}
              <div className="size p-4 ">
                <p>Size</p>
                <div className="d-flex justify-content-between align-items-center shadow-lg p-2 my-3 mx-3">
                  {["S", "M", "L", "XL"].map((sizeOption) => (
                    <p
                      key={sizeOption}
                      className={`size-hover ${
                        selectedSize === sizeOption ? "size-selected" : ""
                      }`}
                      onClick={() => handleSizeClick(sizeOption)}
                    >
                      {sizeOption}
                    </p>
                  ))}
                </div>
              </div>
              {/* coupon section */}
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control coupon"
                  placeholder="Enter Coupon"
                  onChange={(e) => handleCoupon(e)}
                  aria-label="Enter Coupon"
                  aria-describedby="basic-addon2"
                />
                <button
                  onClick={handleAddCoupon}
                  className="input-group-text"
                  id="basic-addon2"
                >
                  Add
                </button>
              </div>

              {/* offers available */}
              <div>
                <p className="h6 text-info">Available offers</p>
                <ul className="list-group text-secondary mb-4">
                  <li>
                    Bank Offer10% off on Bank of Baroda Credit Card and EMI
                    Transactions, up to ₹1500 on orders of ₹5000 and above{" "}
                    <Link href="#">T&C</Link>
                  </li>
                  <li>
                    Bank Offer10% off on Canara Bank Credit Card Transactions,
                    up to ₹1,500 on orders of ₹5,000 and above{" "}
                    <Link href="#">T&C</Link>
                  </li>
                  <li>
                    Bank Offer10% off on Citi-branded Credit Card EMI
                    Transactions, up to ₹2,000 on orders of ₹10,000 and above{" "}
                    <Link href="#">T&C</Link>
                  </li>
                  <li>
                    Special PriceGet extra 20% off (price inclusive of
                    cashback/coupon) <Link href="#">T&C</Link>
                  </li>
                </ul>
              </div>

              {/* More products */}
              <div className="card-footer">
                <div className="price my-3 text-center h4 text-success">
                  More Prodcuts like this..
                  <div className="row mt-4 view-more">
                    {PRODUCTS.slice(4, 16).map((product) => (
                      <div className="col-md-3 col-6 p-2" key={product.id}>
                        <div key={product.id}>
                          <Link
                            to={`/viewProduct`}
                            // onclick it update the view product and it takes to the view product page with id
                            onClick={() => viewProductDetails(product.id)}
                          >
                            <div className="card">
                              <img
                                src={product.image}
                                alt=""
                                className=" card-img-top img-fluid  m-auto p-3 img"
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;
