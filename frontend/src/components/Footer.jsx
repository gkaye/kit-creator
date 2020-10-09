import { Button, Layout } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import { navigateToAboutAction } from "../state/navigationReducer";

const Footer = () => {
  const dispatch = useDispatch();
  return (
    <Layout.Footer style={{ textAlign: "center", paddingBottom: "5px" }}>
      <Button
        id="footer-text"
        type="link"
        shape="square"
        onClick={() => dispatch(navigateToAboutAction())}
        style={{ fontSize: "12px", color: "rgb(0,0,0,0.6)" }}
      >
        About
      </Button>
    </Layout.Footer>
  );
};

export default Footer;
