import React from "react";

const ProductPrice = ({ product }) => {
  let hasDiscount = product.discount > 0;
  let fullPrice = product.price.toFixed(2);
  let discountPrice = (
    fullPrice -
    (product.price * product.discount) / 100
  ).toFixed(2);

  return (
    <div>
      <div
        style={
          hasDiscount
            ? { textDecoration: "line-through", color: "#ccc", fontSize: 15 }
            : { color: "#ff7851" }
        }
      >
        {" "}
        {fullPrice} Lei
      </div>
      <div className="text-danger">
        {" "}
        {hasDiscount ? `${discountPrice} Lei` : <br></br>}
      </div>
    </div>
  );
};

export default ProductPrice;
