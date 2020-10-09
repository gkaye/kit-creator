import React from "react";
import { useSelector } from "react-redux";
import { Col, Divider, Row } from "antd";

import { orderedCartSelector } from "../../state/cartReducer";
import CartProductCard from "./CartProductCard";

const CartEditor = () => {
  const productIds = useSelector(orderedCartSelector);

  return (
    <Row justify="start" align="top">
      {productIds.map((productId) => (
        <Col xl={24}>
          <CartProductCard productId={productId} />
          <Divider style={{ margin: "5px 0 5px 0" }} />
        </Col>
      ))}
    </Row>
  );
};

export default CartEditor;
