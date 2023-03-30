import React from "react";
import { Layout } from "@douyinfe/semi-ui";
import Head from "./component/Header";
import SiderNav from "./component/SiderNav";

const App = () => {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Layout className="components-layout-demo">
      <Header>
        <Head />
      </Header>
      <Layout>
        <Sider>
          <SiderNav />
        </Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default App;
