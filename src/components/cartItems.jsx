/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ShopContext } from "./shopContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS, PRODUCTS1 } from "../components/products";

const CartItems = (props) => {
  // Import Data
  const { id, name, image, price, brand } = props.data;
  const [coupon, setCoupon] = useState();
  const {
    viewProductDetails,
    addToCart,
    cartItems,
    removeToCart,
    selectedProduct,
    appliedCoupon,
    applyCoupon,
    getTotalCartAmount,
    cartCouponPrice,

    updateCartItemCount,
  } = useContext(ShopContext);

  const handleCoupon = (event) => {
    setCoupon(event.target.value);
  };
  const [discountPrice, setDiscountPrice] = useState(price);

  const handleAddCoupon = () => {
    if (appliedCoupon) {
      alert("Coupon Already Applied");
      return;
    }

    if (coupon.trim().toLowerCase() === "discount50") {
      // console.log(coupon);
      alert("Coupon Applied");
      const newOfferPrice = price / 2;
      setDiscountPrice(newOfferPrice);

      applyCoupon();
      getTotalCartAmount(coupon);
    } else {
      // console.log(coupon);
      alert("Invalid Coupon");
    }
  }; //
  // Filtering the Selected product when we click the add to cart button

  const productId = selectedProduct || 0;
  const product =
    PRODUCTS.find((item) => item.id === productId) ||
    PRODUCTS1.find((item) => item.id === productId);

  return (
    <>
      {/* Cart Items Component */}
      <div className="cart-items p-3">
        <hr />

        <div className="container-xxl">
          <div key={id} className="row">
            {/* Cart Items (4 sections)*/}
            <table>
              <tbody>
                <tr>
                  {/* Mapping cart img */}

                  <td className="col-md-2 col-3 cart-img">
                    <Link
                      to={`/viewProduct`}
                      onClick={() => viewProductDetails(id)}
                    >
                      <img src={image} alt="" className="img-fluid cart-img1" />
                    </Link>
                  </td>

                  {/* Mapping cart details */}

                  <td className="col-md-5 col-6 cart-product">
                    <p className="card-details">
                      <span className="cart-text">Product Brand : </span>
                      <span className="clr cart-text">{brand}</span>
                    </p>
                    <p className="card-details">
                      <span className="cart-text">Product Name : </span>
                      <span className="clr cart-text">{name}</span>
                    </p>
                    <p className="card-details">
                      <span className="cart-text">Product Price : </span> ₹
                      <span className="clr cart-text">
                        {cartCouponPrice(
                          appliedCoupon ? price / 2 : discountPrice
                        )}
                        {appliedCoupon ? (
                          <sub className="text-danger">Off 50%</sub>
                        ) : null}
                      </span>
                    </p>
                  </td>

                  {/* Mapping cart quantity how many items selected */}
                  <td className="col-md-3 col-3 cart-quantity">
                    <p className="quantity">Quantity</p>
                    <button
                      className="add-btn btnn"
                      onClick={() => addToCart(id)}
                    >
                      +
                    </button>

                    <input
                      className="qnty-show"
                      readOnly
                      type="text"
                      value={cartItems[id]}
                      onChange={(e) =>
                        updateCartItemCount(Number(e.target.value), id)
                      }
                    />
                    <button
                      className="less-btn btnn"
                      onClick={() => removeToCart(id)}
                    >
                      -
                    </button>
                  </td>
                  {/* Coupon code */}
                  <td className="col-md-3 col-3 cart-coupon">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Coupon"
                        aria-label="Enter Coupon"
                        onChange={(e) => handleCoupon(e)}
                        // value={coupon}
                        aria-describedby="basic-addon2"
                      />
                      <span
                        onClick={() => handleAddCoupon()}
                        className="input-group-text"
                        id="basic-addon2"
                      >
                        Add
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
