import React from "react";

const ProductPrice = ({ product, size }) => {
  let hasDiscount = product.discount > 0;
  let fullPrice = product.price;
  let discountPrice = (
    fullPrice -
    (product.price * product.discount) / 100
  ).toFixed(2);

  const textStyle = {
    discountStyle: {
      fontFamily: '"latoblack","Helvetica Neue","Helvetica,Arial,sans-serif"',
      textDecoration: "line-through",
      color: "#ccc",
      fontSize: "1rem",
    },
    noDiscountStyle: {
      fontFamily: '"latoblack","Helvetica Neue","Helvetica,Arial,sans-serif"',
      color: "#ff8152",
      fontSize: "18px",
    },
    normalSize: {
      fontSize: "1.5rem",
    },
    largeSize: {
      fontSize: "2.5rem",
    },
  };

  return (
    <div class="mt-0">
      <div
        style={
          hasDiscount ? textStyle.discountStyle : textStyle.noDiscountStyle
        }
      >
        <span
          style={
            !hasDiscount && size === "large"
              ? textStyle.largeSize
              : textStyle.normalSize
          }
        >
          {" "}
          {fullPrice} lei{" "}
        </span>
      </div>
      <div style={textStyle.noDiscountStyle}>
        {hasDiscount ? (
          <span
            style={
              size === "large" ? textStyle.largeSize : textStyle.normalSize
            }
          >
            {discountPrice} lei
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProductPrice;
