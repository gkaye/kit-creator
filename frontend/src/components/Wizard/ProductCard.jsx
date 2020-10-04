import React from "react";
import PropTypes from "prop-types";
import { MdRemoveShoppingCart, MdShoppingCart } from "react-icons/all";
import { useDispatch } from "react-redux";
import {
  Button,
  Carousel,
  Col,
  Dropdown,
  Menu,
  Row,
  Space,
  Tooltip,
} from "antd";
import { DownOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import Typography from "antd/es/typography";
import { useParamSelector } from "../../state/reducerHelpers";
import {
  addProductAction,
  cartContainsProductSelector,
  productQuantitySelector,
  removeProductAction,
  updateProductQuantityAction,
} from "../../state/cartReducer";
import Ratings from "./Ratings";
import Descriptions from "./Descriptions";
import { productSelector } from "../../state/templateReducer";

const CarouselButton = ({ currentSlide, slideCount, icon, ...props }) => (
  <div {...props}>{icon}</div>
);

CarouselButton.propTypes = {
  currentSlide: PropTypes.number,
  slideCount: PropTypes.number,
  icon: PropTypes.element.isRequired,
};

CarouselButton.defaultProps = { currentSlide: 0, slideCount: 0 };

const cardStyle = {
  width: "400px",
  margin: "5px",
  padding: "12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  borderTop: "solid",
  borderTopColor: "rgba(0,0,0,0.03)",
  backgroundColor: "rgba(255,255,255,1)",
  boxShadow: "0px 1px 5px 1px rgb(0,0,0, 0.04)",
};
const ProductCard = ({ productId, maxQuantity }) => {
  const { link, title, images, price, descriptions } = useParamSelector(
    productSelector,
    productId
  );
  const dispatch = useDispatch();
  const purchased = useParamSelector(cartContainsProductSelector, productId);

  const displayPriceString = price.toFixed(2).toString().split(".");
  const displayPriceDollarsString = displayPriceString[0];
  const displayPriceCentsString = displayPriceString[1];

  // Set up quantity
  const quantity = useParamSelector(productQuantitySelector, productId);

  // Generate quantity options
  const quantityOptions = [];
  for (let i = 1; i <= maxQuantity; i += 1) {
    quantityOptions.push(i);
  }

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
      <div style={cardStyle}>
        <Row align="top" justify="center">
          <Col span={11}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
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
              ellipsis
            >
              <Typography.Link
                href={link}
                target="_blank"
                style={{ color: "black" }}
              >
                {title}
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
                <Typography.Text
                  style={{
                    fontSize: "12px",
                    position: "relative",
                    top: "-.5em",
                  }}
                >
                  $
                </Typography.Text>
                <Typography.Text strong style={{ fontSize: "21px" }}>
                  {displayPriceDollarsString}
                </Typography.Text>
                <Typography.Text
                  style={{
                    fontSize: "12px",
                    position: "relative",
                    left: "2px",
                    top: "-.5em",
                  }}
                >
                  {displayPriceCentsString}
                </Typography.Text>
              </div>
              <div>
                {purchased ? (
                  <div
                    style={{
                      height: "23px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Dropdown
                      overlay={
                        <Menu
                          onClick={({ key }) => {
                            dispatch(
                              updateProductQuantityAction({
                                productId,
                                quantity: parseInt(key, 10),
                              })
                            );
                          }}
                        >
                          {quantityOptions.map((quantityOption) => (
                            <Menu.Item
                              key={quantityOption}
                              style={{
                                fontSize: "10px",
                                padding: "0px 12px 0px 12px",
                                fontWeight:
                                  quantityOption === quantity ? 700 : 400,
                              }}
                            >
                              {quantityOption}
                            </Menu.Item>
                          ))}
                        </Menu>
                      }
                      placement="bottomCenter"
                      trigger={["click"]}
                    >
                      <Button
                        className="quantity-button"
                        style={{ fontSize: "10px" }}
                      >
                        Qty: {quantity}
                        <DownOutlined
                          style={{
                            fontSize: "8px",
                            marginLeft: "4px",
                            marginTop: "2px",
                          }}
                        />
                      </Button>
                    </Dropdown>
                    <Tooltip
                      placement="bottom"
                      title="Remove from Cart"
                      overlayStyle={{
                        fontSize: "10px",
                      }}
                    >
                      <MdRemoveShoppingCart
                        onClick={() => dispatch(removeProductAction(productId))}
                        className="remove-from-cart-button"
                      />
                    </Tooltip>
                  </div>
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
};

ProductCard.defaultProps = {
  maxQuantity: 6,
};

export default ProductCard;
