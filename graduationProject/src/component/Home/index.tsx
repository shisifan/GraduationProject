import React, { Component, useMemo } from "react";
import { Layout } from "@douyinfe/semi-ui";
import Head from "../Header";
import SiderNav from "./SiderNav";
import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Par from "./Par";
import Isolation from "./Isolation";
import AddLocal from "./AddLocal";
import Foot from "../Footer";
interface IHomeProps {
  sort?: string;
}
const Home = (props: IHomeProps) => {
  const { sort } = props;
  console.log(11, window.location.pathname);

  const { Sider, Header, Content, Footer } = Layout;
  return (
    <Layout className="components-layout-demo">
      <Layout>
        <Sider style={{ overflow: "hidden", width: "30vh" }}>
          <SiderNav />
        </Sider>
        <Content style={{ overflow: "scroll", width: "70vh" }}>
          <Routes>
            <Route path={"/"} element={<Par />} />
            <Route path={"/addLocal"} element={<AddLocal />} />
            <Route path="/isolation" element={<Isolation />} />
            <Route path="/map" element={<Isolation />} />
            <Route path="/active" element={<Isolation />} />
            <Route path="/infect" element={<Isolation />} />
            <Route path="/diagnosed" element={<Isolation />} />
            <Route path="/userManagement" element={<Isolation />} />
          </Routes>
        </Content>
      </Layout>
      <Footer>
        <Foot />
      </Footer>
    </Layout>
  );
};

export default Home;
