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
      <Content>
        <div>{children}</div>
      </Content>
      <Footer />
    </Layout>
  );
}
