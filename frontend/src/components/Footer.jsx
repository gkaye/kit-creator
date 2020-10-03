import { Layout, Typography } from "antd";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <Layout.Footer style={{ textAlign: "center" }}>
      <Typography.Text
        id="footer-text"
        strong
        style={{ textAlign: "center", color: "rgb(0,0,0,0.6)" }}
      >
        Keto Starter Kit ©2020
      </Typography.Text>
    </Layout.Footer>
  );
};

export default Footer;
