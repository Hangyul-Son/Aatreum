import React, { ReactNode } from "react";
import { Layout } from "antd";

type Properties = {
  children: ReactNode;
};

const { Header, Content, Footer } = Layout;

function Template({ children }: Properties) {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default Template;
