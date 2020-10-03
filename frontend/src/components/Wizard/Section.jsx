import { Card, Col, Row } from "antd";
import PropTypes from "prop-types";
import React from "react";

import "../../App.css";

import ProductCard from "./ProductCard";
import { useParamSelector } from "../../state/reducerHelpers";
import { sectionSelector } from "../../state/templateReducer";

const Section = ({ sectionId }) => {
  const { title, description, products } = useParamSelector(
    sectionSelector,
    sectionId
  );

  return (
    <Card
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,1) 150px, rgba(0,0,0,0) 400px)",
        border: "none",
      }}
    >
      <Card.Meta
        style={{ marginBottom: "15px" }}
        title={title}
        description={description}
      />
      <Row justify="start" align="top">
        {products.map((product) => (
          <Col xl={8} lg={12} sm={24}>
            <ProductCard productId={product} />
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
