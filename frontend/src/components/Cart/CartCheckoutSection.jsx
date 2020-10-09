import React from "react";
import { Button, Card, Col, Row } from "antd";
import { useSelector } from "react-redux";

import { orderedCartSelector } from "../../state/cartReducer";
import CartCheckoutProductCard from "./CartCheckoutProductCard";

const CartCheckoutSection = () => {
  const productIds = useSelector(orderedCartSelector);

  return (
    <Card
      style={{
        background: "rgba(0,0,0,0)",
        border: "none",
        width: "100%",
      }}
      bodyStyle={{ padding: "20px 20px 16px 20px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "top",
        }}
      >
        <Row
          justify={productIds.length > 3 ? "start" : "center"}
          align="top"
          gutter={[12, 12]}
          style={{
            width: "726px",
          }}
        >
          {productIds.map((productId) => (
            <Col lg={8} md={8} sm={12} xs={24}>
              <CartCheckoutProductCard productId={productId} />
            </Col>
          ))}
        </Row>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "top",
          marginTop: "20px",
        }}
      >
        <Button className="amazon-checkout-button">Checkout on Amazon</Button>
      </div>
    </Card>
  );
};

export default CartCheckoutSection;
