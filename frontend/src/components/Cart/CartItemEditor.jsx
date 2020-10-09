import { Button, Dropdown, Menu, Tooltip } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { MdRemoveShoppingCart } from "react-icons/all";
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import {
  productQuantitySelector,
  removeProductAction,
  updateProductQuantityAction,
} from "../../state/cartReducer";
import { useParamSelector } from "../../state/reducerHelpers";

const CartItemEditor = ({ productId, maxQuantity, justifyContent }) => {
  const dispatch = useDispatch();

  // Set up quantity
  const quantity = useParamSelector(productQuantitySelector, productId);

  // Generate quantity options
  const quantityOptions = [];
  for (let i = 1; i <= maxQuantity; i += 1) {
    quantityOptions.push(i);
  }

  return (
    <div
      style={{
        height: "23px",
        display: "flex",
        justifyContent,
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
                  fontWeight: quantityOption === quantity ? 700 : 400,
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
        <Button className="quantity-button" style={{ fontSize: "10px" }}>
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
  );
};

CartItemEditor.propTypes = {
  productId: PropTypes.string.isRequired,
  maxQuantity: PropTypes.number,
  justifyContent: PropTypes.string,
};

CartItemEditor.defaultProps = {
  maxQuantity: 6,
  justifyContent: "center",
};

export default CartItemEditor;
