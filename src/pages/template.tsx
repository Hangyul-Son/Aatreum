import React, { ReactNode } from "react";
import { Layout } from "antd";

import TopNavigation from "../components/top-navigation";

type Properties = {
  children: ReactNode;
};

const { Header, Content, Footer } = Layout;

function Template({ children }: Properties) {
  return (
    <Layout>
      <Header style={{ background: "#ffffff" }}>
        <TopNavigation />
      </Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default Template;
