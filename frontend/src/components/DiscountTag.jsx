import React from "react";
import { Badge } from "react-bootstrap";

const DiscountTag = ({ product }) => {
  let hasDiscount = product.discount > 0;

  return (
    <div>
      {hasDiscount ? (
        <div style={{ position: "absolute", top: 0, right: 0 }}>
          <h5>
            <Badge variant="danger" as="div" className="float-right mr-0">
              -{product.discount}%
            </Badge>
          </h5>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DiscountTag;
