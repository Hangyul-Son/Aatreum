import React, { ReactNode } from "react";
import { Layout } from "antd";
import "../styles/template.scss";

import TopNavigation from "../components/top-navigation";

type Properties = {
  pageName: string;
  children: ReactNode;
};

const { Header, Content } = Layout;

function Template({ pageName, children }: Properties) {
  return (
    <Layout className={pageName}>
      <Header className="header">
        <TopNavigation />
      </Header>
      <Content>{children}</Content>
      {/* <Footer>TODO</Footer> */}
    </Layout>
  );
}

export default Template;
