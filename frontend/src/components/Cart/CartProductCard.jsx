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

const CartProductCard = ({ productId, maxQuantity }) => {
  const { link, title, images, price } = useParamSelector(
    productSelector,
    productId
  );

  const carouselHeight = "60px";
  const carouselWidth = "60px";

  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "left",
      }}
    >
      <div
        style={{
          margin: "4px 0 0 0",
          padding: "0 12px 8px 12px",
          width: "100%",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
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
          <div>
            <div style={{ width: "calc(100%)" }}>
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
                  <Ellipsis length={45} tooltip>
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
    </div>
  );
};

CartProductCard.propTypes = {
  productId: PropTypes.string.isRequired,
  maxQuantity: PropTypes.number,
};

CartProductCard.defaultProps = {
  maxQuantity: 6,
};

export default CartProductCard;
