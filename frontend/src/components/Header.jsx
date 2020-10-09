import React from "react";
import { Button, Image, Layout } from "antd";
import { MdShoppingCart } from "react-icons/all";
import { useDispatch } from "react-redux";
import "../App.css";
import LogoSvg from "../logo.svg";
import { navigateShowCartAction } from "../state/navigationReducer";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <Layout.Header
      style={{
        marginTop: "20px",
        background: "#f9fafa",
        height: "fit-content",
        lineHeight: "unset",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1380px",
          minWidth: "400px",
          margin: "auto",
        }}
      >
        <div>
          <Image
            id="logo"
            src={LogoSvg}
            preview={false}
            style={{
              float: "left",
              marginLeft: "15px",
            }}
          />
        </div>
        <div
          style={{
            float: "right",
            marginRight: "15px",
          }}
        >
          <Button
            className="open-cart-button"
            onClick={() => dispatch(navigateShowCartAction())}
            icon={
              <MdShoppingCart style={{ position: "relative", right: "5px" }} />
            }
          >
            Cart
          </Button>
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;
