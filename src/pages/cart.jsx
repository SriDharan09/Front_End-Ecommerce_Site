import React, { useContext, useEffect, useState } from "react";
import { PRODUCTS, PRODUCTS1 } from "../components/products";
import Cartitems from "../components/cartItems";
import { ShopContext } from "../components/shopContext";
import { Link } from "react-router-dom";
const Cart = () => {
  const {
    getTotalCartAmount,
    getTotalCartProducts,
    appliedCoupon,
    resetCart,
    cartItems,
  } = useContext(ShopContext);

  const [totalAmount, setTotalAmount] = useState(getTotalCartAmount());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const calculateTotalAmount = () => {
      return getTotalCartAmount(appliedCoupon);
    };

    setTotalAmount(calculateTotalAmount());
  }, [cartItems, appliedCoupon, getTotalCartAmount]);
  // const checkOutAmount = getTotalCartAmount();

  return (
    <>
      {/* Checks for If the cart have greater than Zero cost then it will display the cart product that added by user  */}
      {getTotalCartAmount() > 0 ? (
        <section className="cart-item ">
          <div className="container-xxl">
            <div className="row">
              <div className="container-xxl">
                <div className="row">
                  <table
                    className=""
                    style={{ marginLeft: "60px", marginTop: "50px" }}
                  >
                    {/* Table Header that links to cartItem.jsx component */}
                    <thead>
                      <tr>
                        <th className="col-md-2 col-2 cart-product-text">
                          Product Image
                        </th>
                        <th className="col-md-4 col-4 cart-product-text">
                          Product Details
                        </th>
                        <th className="col-md-3 col-4 cart-product-text">
                          Product Edit
                        </th>
                        <th className="col-2 cart-coupon cart-product-text">
                          Coupons
                        </th>
                      </tr>
                    </thead>
                  </table>
                  {/* Mapping cart items Sending data to cartItems.jsx */}
                  {[...PRODUCTS, ...PRODUCTS1].map((product) => {
                    if (cartItems[product.id] !== 0) {
                      return <Cartitems key={product.id} data={product} />;
                    } else {
                      return null;
                    }
                  })}
                </div>
              </div>
            </div>
            {/* Clear cart */}
            <hr className="mt-4" />
            <Link
              className="d-flex justify-content-end h4 text-danger cart-clear"
              onClick={(e) => {
                e.preventDefault();
                resetCart();
              }}
            >
              Clear cart
            </Link>

            {/* Cart Total */}
            <div className="cart-total d-flex justify-content-between p-3 my-5">
              <Link to={"/shop"} className="shoping ">
                Continue Shopping
              </Link>

              <div>
                <h4>Grand Total:</h4>
                <p>Total Items: {getTotalCartProducts()}</p>
                <h4 className="text-success">
                  ₹ {totalAmount}{" "}
                  {appliedCoupon ? (
                    <sup className="text-danger">Off 50%</sup>
                  ) : null}
                </h4>

                <Link to={"/checkout"} className="shoping ">
                  Check Out
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // If the cart is empty it shows this message
        <div className="p-3 empty">
          <div className="container-xxl">
            <div className="row">
              <div className="text-center">
                <h1>Cart is Empty :(</h1>
                <Link to={"/shop"} className="btn btn-primary ">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
