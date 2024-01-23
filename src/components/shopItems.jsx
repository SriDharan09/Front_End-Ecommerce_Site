import React from "react";
import ShopProducts from "./shopProducts";
import { PRODUCTS, PRODUCTS1 } from "./products";

const shopItems = () => {
  return (
    <>
      {/* Orgin Shop page Prop drilling to shopProducts */}
      <div className="row shop-product mx-5">
        {[...PRODUCTS, ...PRODUCTS1].map((product) => (
          <ShopProducts key={product.id} data={product} />
        ))}
      </div>
    </>
  );
};

export default shopItems;
