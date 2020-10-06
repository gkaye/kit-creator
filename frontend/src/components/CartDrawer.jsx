import React from "react";
import { Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { MdShoppingCart } from "react-icons/all";

import {
  navigationCartVisibleSelector,
  navigateHideCartAction,
} from "../state/navigationReducer";
import CartEditor from "./CartEditor";

const CartDrawer = () => {
  const dispatch = useDispatch();
  const visible = useSelector(navigationCartVisibleSelector);
  return (
    <Drawer
      title={
        <span>
          <MdShoppingCart style={{ position: "relative", top: "2px" }} /> Cart
        </span>
      }
      placement="right"
      closable
      onClose={() => dispatch(navigateHideCartAction())}
      visible={visible}
      width={300}
      bodyStyle={{ padding: "5px 15px 5px 15px" }}
    >
      <CartEditor />
    </Drawer>
  );
};

export default CartDrawer;
