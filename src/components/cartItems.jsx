import React from "react";
import { ShopContext } from "./shopContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS, PRODUCTS1 } from "../components/products";

const cartItems = (props) => {
  const { id, name, image, price, brand } = props.data;
  const {
    viewProductDetails,
    addToCart,
    cartItems,
    removeToCart,
    selectedProduct,
    updateCartItemCount,
  } = useContext(ShopContext);
  const productId = selectedProduct || 0;
  const product =
    PRODUCTS.find((item) => item.id === productId) ||
    PRODUCTS1.find((item) => item.id === productId);
  return (
    <>
      <div className="cart-items p-3">
        <hr />
        <div className="container-xxl">
          <div key={id} className="row">
            <table>
              <tbody>
                <tr>
                  <td className="col-2">
                    <Link
                      to={`/viewProduct`}
                      onClick={() => viewProductDetails(id)}
                    >
                      <img src={image} alt="" className="img-fluid" />
                    </Link>
                  </td>
                  <td className="col-5">
                    <p className="card-details">
                      <span>Product Brand : </span>
                      <span className="clr">{brand}</span>
                    </p>
                    <p className="card-details">
                      <span>Product Name : </span>
                      <span className="clr">{name}</span>
                    </p>
                    <p className="card-details">
                      <span>Product Price : </span> ₹
                      <span className="clr">{price}</span>
                    </p>
                  </td>
                  <td className="col-3">
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
                  <td className="col-3">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Coupon"
                        aria-label="Enter Coupon"
                        aria-describedby="basic-addon2"
                      />
                      <span className="input-group-text" id="basic-addon2">
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

export default cartItems;
