import React from "react";
import ShopProducts from "./shopProducts";
import { PRODUCTS, PRODUCTS1 } from "./products";

const shopItems = () => {
  return (
    <>
      <div className="row">
        {[...PRODUCTS, ...PRODUCTS1].map((product) => (
          <ShopProducts key={product.id} data={product} />
        ))}
      </div>
    </>
  );
};

export default shopItems;
