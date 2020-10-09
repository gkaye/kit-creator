import { Layout } from "antd";
import React from "react";
import "./App.css";
import AboutModal from "./components/AboutModal";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CartDrawer from "./components/Cart/CartDrawer";

function App() {
  return (
    <Layout
      style={{
        background: "#f9fafa",
        minHeight: "100%",
      }}
    >
      <Header />
      <Content />
      <Footer />
      <AboutModal />
      <CartDrawer />
    </Layout>
  );
}

export default App;
