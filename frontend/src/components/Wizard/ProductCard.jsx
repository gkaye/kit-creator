import React from "react";
import PropTypes from "prop-types";
import { MdShoppingCart } from "react-icons/all";
import { useDispatch } from "react-redux";
import { Button, Carousel, Col, Row, Space } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Typography from "antd/es/typography";
import Ellipsis from "ant-design-pro/lib/Ellipsis";
import { useParamSelector } from "../../state/reducerHelpers";
import {
  addProductAction,
  cartContainsProductSelector,
} from "../../state/cartReducer";
import Ratings from "./Ratings";
import Descriptions from "./Descriptions";
import { productSelector } from "../../state/templateReducer";

import "../../App.css";
import CartItemEditor from "../Cart/CartItemEditor";
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

const ProductCard = ({
  productId,
  maxQuantity,
  noProductInSectionPurchased,
}) => {
  const { link, title, images, price, descriptions } = useParamSelector(
    productSelector,
    productId
  );
  const dispatch = useDispatch();
  const purchased = useParamSelector(cartContainsProductSelector, productId);

  const active = purchased || noProductInSectionPurchased;

  const carouselHeight = "93px";
  const carouselWidth = "116px";

  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <div className={`product-card ${active ? "product-card-active" : ""}`}>
        <Row
          className={`product-card-row ${
            active ? "product-card-row-active" : ""
          }`}
          align="top"
          justify="center"
        >
          <Col span={11}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              <Carousel
                arrows
                prevArrow={
                  <CarouselButton
                    style={{ alignSelf: "bottom" }}
                    icon={<LeftOutlined style={{ fontSize: "small" }} />}
                  />
                }
                nextArrow={
                  <CarouselButton
                    icon={<RightOutlined style={{ fontSize: "small" }} />}
                  />
                }
                speed={200}
                effect="fade"
                style={{ width: carouselWidth }}
              >
                {images.map((image) => (
                  <div key={image}>
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                        height: carouselHeight,
                        width: carouselWidth,
                      }}
                    >
                      <img
                        src={image}
                        alt="product"
                        style={{
                          width: carouselWidth,
                          objectFit: "contain",
                          paddingTop: "6px",
                          paddingBottom: "4px",
                          userSelect: "none",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
          <Col span={13}>
            <Typography.Title
              level={5}
              style={{ fontSize: "15px", textAlign: "left" }}
            >
              <Typography.Link
                href={link}
                target="_blank"
                style={{ color: "black" }}
              >
                <Ellipsis length={26} tooltip>
                  {title}
                </Ellipsis>
              </Typography.Link>
            </Typography.Title>
            <Ratings
              ratings={[
                { title: "Ease of use", rating: 3.5 },
                { title: "Quality", rating: 2 },
                { title: "Affordability", rating: 5 },
              ]}
            />
          </Col>
          <Col span={24}>
            <Descriptions descriptions={descriptions} />
          </Col>
          <Col span={24}>
            <Space direction="vertical" size={4} style={{ display: "flex" }}>
              <div style={{ textAlign: "center" }}>
                <Price price={price} />
              </div>
              <div>
                {purchased ? (
                  <CartItemEditor
                    productId={productId}
                    maxQuantity={maxQuantity}
                  />
                ) : (
                  <Button
                    className="add-to-cart-button"
                    type="secondary"
                    shape="round"
                    icon={
                      <MdShoppingCart
                        style={{ position: "relative", right: "5px" }}
                      />
                    }
                    onClick={() => dispatch(addProductAction(productId))}
                    style={{ transition: "none", margin: "auto" }}
                  >
                    Add to Cart
                  </Button>
                )}
              </div>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  productId: PropTypes.string.isRequired,
  maxQuantity: PropTypes.number,
  noProductInSectionPurchased: PropTypes.bool,
};

ProductCard.defaultProps = {
  maxQuantity: 6,
  noProductInSectionPurchased: true,
};

export default ProductCard;
