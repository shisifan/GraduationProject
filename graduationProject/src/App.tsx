import React from "react";
import { Button, Layout } from "@douyinfe/semi-ui";

const App = () => {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Layout className="components-layout-demo">
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default App;
