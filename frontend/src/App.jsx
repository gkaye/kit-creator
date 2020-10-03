import { Layout } from "antd";
import React from "react";
import "./App.css";
import AboutModal from "./components/AboutModal";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Layout
      style={{
        background: "#f9fafa",
        minHeight: "100%",
      }}
    >
      <Header />
      <AboutModal />
      <Content />
      <Footer />
    </Layout>
  );
}

export default App;
