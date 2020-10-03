import { Layout } from "antd";
import React from "react";
import Kit from "./Wizard/Kit";

const Content = () => {
  return (
    <Layout.Content style={{ padding: "0px 50px", background: "#f9fafa" }}>
      <Kit kitId="1" />
    </Layout.Content>
  );
};

export default Content;
