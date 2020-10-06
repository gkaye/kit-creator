import { Button, Col, Image, Layout, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import LogoSvg from "../logo.svg";
import {
  navigateToAboutAction,
  navigateShowCartAction,
} from "../state/navigationReducer";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <Layout.Header
      style={{
        padding: "0 0 0 0",
        background: "#f9fafa",
        height: "fit-content",
        lineHeight: "unset",
      }}
    >
      <Row justify="space-between" align="middle">
        <Col span={12}>
          <Image
            id="logo"
            src={LogoSvg}
            preview={false}
            style={{
              float: "left",
              margin: "15px 0px 15px 15px",
            }}
          />
        </Col>
        <Col
          span={4}
          style={{
            margin: "15px 15px 15px 0px",
          }}
        >
          <Button
            id="about-button"
            size="small"
            shape="square"
            onClick={() => dispatch(navigateShowCartAction())}
            style={{ float: "right" }}
          >
            Cart
          </Button>
          <Button
            id="about-button"
            size="small"
            shape="square"
            onClick={() => dispatch(navigateToAboutAction())}
            style={{ float: "right", marginRight: "5px" }}
          >
            About
          </Button>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Header;
