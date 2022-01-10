import React, { ReactNode } from "react";
import { Layout } from "antd";

import TopNavigation from "../components/top-navigation";

type Properties = {
  pageName: string;
  children: ReactNode;
};

const { Header, Content, Footer } = Layout;

function Template({ pageName, children }: Properties) {
  return (
    <Layout className={pageName}>
      <Header style={{ background: "#ffffff" }}>
        <TopNavigation />
      </Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default Template;
