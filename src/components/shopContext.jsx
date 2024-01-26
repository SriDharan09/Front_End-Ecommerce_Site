import React, { createContext, useState } from "react";
import { PRODUCTS, PRODUCTS1 } from "../components/products";
// import CartItems from "./cartItems";

// All Functionality of adding , removing , incrementing , ....
// decrementing product from cart , view product details, update cart item count, ...
//  get total cart amount, get total cart products, get default cart

// context
export const ShopContext = createContext(null);
// function
const getDefaultCart = () => {
  const cart = [];

  for (let i = 0; i < PRODUCTS.length + PRODUCTS1.length; i++) {
    cart[i] = 0;
  }

  return cart;
};

const Shopcontext = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const getTotalCartAmount = (coupon) => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo =
          PRODUCTS.find((product) => product.id === Number(item)) ||
          PRODUCTS1.find((product) => product.id === Number(item));
        console.log(coupon);
        if (coupon && coupon === true) {
          totalAmount += cartItems[item] * (itemInfo.price / 2);
        } else {
          totalAmount += cartItems[item] * itemInfo.price;
        }
        // totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount.toFixed(2);
  };

  const getTotalCartProducts = () => {
    let totalProducts = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalProducts += cartItems[item];
      }
    }
    return totalProducts;
  };

  const addToCart = (productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: prev[productId] + 1,
    }));
  };

  const removeToCart = (productId) => {
    if (cartItems[productId] > 0) {
      setCartItems((prev) => ({
        ...prev,
        [productId]: prev[productId] - 1,
      }));
    }
  };

  const updateCartItemCount = (newAmount, productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: newAmount,
    }));
  };
  const clearCart = () => {
    const updatedCartItems = {};
    for (const productId in cartItems) {
      updatedCartItems[productId] = 0;
    }
    setCartItems(updatedCartItems);
  };

  const resetCart = () => {
    setCartItems(getDefaultCart());
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  const viewProductDetails = (productId) => {
    setSelectedProduct(productId);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };
  // const ratingStar = () => {
  //   return Math.floor(Math.random() * 5) + 2;
  // };
  const [appliedCoupon, setAppliedCoupon] = useState(false);
  const resetCoupon = () => {
    setAppliedCoupon(false);
    // other logic...
  };

  const applyCoupon = () => {
    setAppliedCoupon(true);
  };

  const cartCouponPrice = (price) => {
    return price;
  };

  const contextValue = {
    cartItems,
    // ratingStar,
    applyCoupon,
    resetCoupon,
    appliedCoupon,
    cartCouponPrice,
    addToCart,
    removeToCart,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalCartProducts,
    clearCart,
    resetCart,
    viewProductDetails,
    closeProductDetails,
    selectedProduct,
  };

  console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default Shopcontext;
