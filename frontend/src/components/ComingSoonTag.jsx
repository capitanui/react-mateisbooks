import React from "react";
import { Badge } from "react-bootstrap";

const DiscountTag = ({ product }) => {
  let isComingSoon = product.countInStock === 0 && product.order === "Yes";

  return (
    <div>
      {isComingSoon ? (
        <div style={{ position: "absolute", top: 0, right: 0 }}>
          <Badge variant="danger" as="div" className="float-right mr-0">
            În curând
          </Badge>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DiscountTag;
