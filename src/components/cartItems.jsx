import React from "react";
import { ShopContext } from "./shopContext";
import { useContext } from "react";

const cartItems = (props) => {
  const { id, name, image, price, brand } = props.data;
  const { viewProductDetails, addToCart, cartItems } = useContext(ShopContext);
  return <></>;
};

export default cartItems;
