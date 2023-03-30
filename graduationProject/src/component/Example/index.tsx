import React from "react";
import { Layout } from "@douyinfe/semi-ui";
import Head from "../Header";
import Foot from "../Footer";
import Register from "../Register";
import Login from "../Login";

interface ExampleIprops {
  login: boolean;
}
const Example = (props: ExampleIprops) => {
  const { Header, Footer } = Layout;
  const { login } = props;
  return (
    <Layout className="components-layout-demo">
      <Header>
        <Head />
      </Header>
      <Layout style={{ height: "80vh" }}>
        {login ? <Login /> : <Register />}
      </Layout>
      <Footer>
        <Foot />
      </Footer>
    </Layout>
  );
};

export default Example;
