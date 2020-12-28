import React from "react";
import { Card, Badge } from "react-bootstrap";

const DiscountTag = ({ product }) => {
  let hasDiscount = product.discount > 0;

  return (
    <div>
      {hasDiscount ? (
        <Card.ImgOverlay>
          <h5>
            <Badge variant="danger" as="div" className="float-right mr-0">
              -{product.discount}%
            </Badge>
          </h5>
        </Card.ImgOverlay>
      ) : (
        ""
      )}
    </div>
  );
};

export default DiscountTag;
