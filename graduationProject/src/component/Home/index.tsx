import React, { Component } from "react";
import { Layout } from "@douyinfe/semi-ui";
import Head from "../Header";
import SiderNav from "./SiderNav";
import Foot from "../Footer";

const Home = () => {
  const { Footer, Sider, Content } = Layout;
  return (
    <Layout className="components-layout-demo">
      <Layout>
        <Sider>
          <SiderNav />
        </Sider>
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
};

export default Home;
