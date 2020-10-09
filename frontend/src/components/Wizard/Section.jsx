import { Card, Col, Row } from "antd";
import PropTypes from "prop-types";
import React from "react";

import "../../App.css";

import ProductCard from "./ProductCard";
import { useParamSelector } from "../../state/reducerHelpers";
import { sectionSelector } from "../../state/templateReducer";
import { cartContainsNoProductsSelector } from "../../state/cartReducer";

const Section = ({ sectionId }) => {
  const { title, description, products } = useParamSelector(
    sectionSelector,
    sectionId
  );
  const noProductInSectionPurchased = useParamSelector(
    cartContainsNoProductsSelector,
    products
  );

  return (
    <Card
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,1) 125px, rgba(0,0,0,0) 300px)",
        border: "none",
        borderRadius: "10px",
      }}
      bodyStyle={{ padding: "16px 20px 32px 20px" }}
    >
      <Card.Meta
        style={{ marginBottom: "15px" }}
        title={title}
        description={description}
      />
      <Row justify={products.length >= 3 ? "start" : "center"} align="top">
        {products.map((product) => (
          <Col xl={8} lg={12} sm={24}>
            <ProductCard
              productId={product}
              noProductInSectionPurchased={noProductInSectionPurchased}
            />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

Section.propTypes = {
  sectionId: PropTypes.string.isRequired,
};

export default Section;
