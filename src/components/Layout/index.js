import React from "react";
import Link from "next/link";
import Headerr from "./Header";
import Footer from "./Footer";
import { Layout } from "antd";
const { Content } = Layout;

export default function PageLayout({ children }) {
  return (
    <Layout className="layout">
      <Headerr />
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer />
    </Layout>
  );
}
