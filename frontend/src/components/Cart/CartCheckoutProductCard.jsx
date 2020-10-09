import React from "react";
import PropTypes from "prop-types";
import Typography from "antd/es/typography";
import Ellipsis from "ant-design-pro/lib/Ellipsis";

import { useParamSelector } from "../../state/reducerHelpers";
import { productSelector } from "../../state/templateReducer";

import "../../App.css";
import CartItemEditor from "./CartItemEditor";
import Price from "../Price";

const CarouselButton = ({ currentSlide, slideCount, icon, ...props }) => (
  <div {...props}>{icon}</div>
);

CarouselButton.propTypes = {
  currentSlide: PropTypes.number,
  slideCount: PropTypes.number,
  icon: PropTypes.element.isRequired,
};

CarouselButton.defaultProps = { currentSlide: 0, slideCount: 0 };

const CartCheckoutProductCard = ({ productId, maxQuantity }) => {
  const { link, title, images, price } = useParamSelector(
    productSelector,
    productId
  );

  const carouselHeight = "60px";
  const carouselWidth = "60px";

  return (
    <div
      style={{
        height: "115px",
        borderRadius: "15px",
        backgroundColor: "#ffffff",
        boxShadow: "0 1px 5px 1px rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            height: carouselHeight,
            width: carouselWidth,
            marginLeft: "15px",
            marginRight: "15px",
          }}
        >
          <img
            src={images[0]}
            alt="product"
            style={{
              width: carouselWidth,
              objectFit: "contain",
              userSelect: "none",
            }}
          />
        </div>
        <div style={{ marginRight: "15px" }}>
          <div>
            <Typography.Title
              level={5}
              style={{
                fontSize: "13px",
                textAlign: "left",
                marginBottom: "0",
              }}
            >
              <Typography.Link
                href={link}
                target="_blank"
                style={{ color: "black", whiteSpace: "pre-wrap" }}
              >
                <Ellipsis length={34} tooltip>
                  {title}
                </Ellipsis>
              </Typography.Link>
            </Typography.Title>
          </div>
          <div style={{ textAlign: "left" }}>
            <Price price={price} fontSize={17} />
          </div>
          <CartItemEditor
            productId={productId}
            maxQuantity={maxQuantity}
            justifyContent="left"
          />
        </div>
      </div>
    </div>
  );
};

CartCheckoutProductCard.propTypes = {
  productId: PropTypes.string.isRequired,
  maxQuantity: PropTypes.number,
};

CartCheckoutProductCard.defaultProps = {
  maxQuantity: 6,
};

export default CartCheckoutProductCard;
