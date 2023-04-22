import React, { Component } from "react";
import { Layout } from "@douyinfe/semi-ui";
import Head from "../Header";
import SiderNav from "./SiderNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Par from "./Par";
import Isolation from "./Isolation";
import AddLocal from "./AddLocal";

const Home = () => {
  const { Sider, Content } = Layout;
  return (
    <Layout className="components-layout-demo">
      <Layout>
        <Sider>
          <SiderNav />
        </Sider>
        <Content>
          <Routes>
            <Route path="/" element={<Par />} />
            <Route path="/addLocal" element={<AddLocal />} />
            <Route path="/isolation" element={<Isolation />} />
            <Route path="/map" element={<Isolation />} />
            <Route path="/active" element={<Isolation />} />
            <Route path="/infect" element={<Isolation />} />
            <Route path="/diagnosed" element={<Isolation />} />
            <Route path="/userManagement" element={<Isolation />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
