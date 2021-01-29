import React from "react";

const ProductPrice = ({ product }) => {
  let hasDiscount = product.discount > 0;
  let fullPrice = product.price;
  let discountPrice = (
    fullPrice -
    (product.price * product.discount) / 100
  ).toFixed(2);

  return (
    <div class="mt-0">
      <div
        style={
          hasDiscount
            ? {
                fontFamily:
                  '"latoblack","Helvetica Neue","Helvetica,Arial,sans-serif"',
                textDecoration: "line-through",
                color: "#ccc",
                fontSize: "13px",
              }
            : {
                fontFamily:
                  '"latoblack","Helvetica Neue","Helvetica,Arial,sans-serif"',
                color: "#ff8152",
                fontSize: "18px",
              }
        }
      >
        {fullPrice} lei
      </div>
      <div
        style={{
          fontFamily:
            '"latoblack","Helvetica Neue","Helvetica,Arial,sans-serif"',
          color: "#ff8152",
          fontSize: "18px",
        }}
      >
        {hasDiscount ? `${discountPrice} lei` : ""}
      </div>
    </div>
  );
};

export default ProductPrice;
