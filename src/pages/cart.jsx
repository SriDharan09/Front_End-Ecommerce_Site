import React, { useContext } from "react";
import { PRODUCTS, PRODUCTS1 } from "../components/products";
import Cartitems from "../components/cartItems";
import { ShopContext } from "../components/shopContext";
import { Link } from "react-router-dom";
const cart = () => {
  const {
    getTotalCartAmount,
    getTotalCartProducts,
    addToCart,
    resetCart,
    cartItems,
  } = useContext(ShopContext);
  const checkOutAmount = getTotalCartAmount();

  return (
    <>
      {checkOutAmount > 0 ? (
        <section className="cart-item ">
          <div className="container-xxl">
            <div className="row">
              <div className="container-xxl">
                <div className="row">
                  <table
                    className=""
                    style={{ marginLeft: "60px", marginTop: "50px" }}
                  >
                    <thead>
                      <tr>
                        <th className="col-2">Product Image</th>
                        <th className="col-4">Product Details</th>
                        <th className="col-3">Product Edit</th>
                        <th className="col-2">Coupons</th>
                      </tr>
                    </thead>
                  </table>
                  {[...PRODUCTS, ...PRODUCTS1].map((product) => {
                    if (cartItems[product.id] !== 0) {
                      return <Cartitems key={product.id} data={product} />;
                    }
                  })}
                </div>
              </div>
            </div>
            <hr className="mt-4" />
            <Link
              className="d-flex justify-content-end h4 text-danger"
              onClick={(e) => {
                e.preventDefault();
                resetCart();
              }}
            >
              Clear cart
            </Link>

            <div className="cart-total d-flex justify-content-between p-3 my-5">
              <Link to={"/shop"} className="shoping ">
                Continue Shopping
              </Link>

              <div>
                <h4>Grand Total:</h4>
                <p>Total Items: {getTotalCartProducts()}</p>
                <h4 className="text-success">₹ {checkOutAmount}</h4>

                <Link className="shoping ">Check Out</Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
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

export default cart;
