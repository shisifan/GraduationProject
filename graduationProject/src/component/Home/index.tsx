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
import Xian from "./Xian";
import Diagnosed from "./Diagnosed";
import Infect from "./Infect";
import Manage from "./Manage";
import Die from "./Die";
import Cure from "./Cure";
import Test from "./Test";
interface IHomeProps {
  sort?: string;
}
const Home = (props: IHomeProps) => {
  const { sort } = props;

  const { Sider, Header, Content, Footer } = Layout;
  return (
    <Layout className="components-layout-demo">
      <Layout>
        <Sider style={{ overflow: "hidden", width: "30vh" }}>
          <SiderNav />
        </Sider>
        <Content
          style={{ overflow: "scroll", width: "70vh", paddingBottom: "135px" }}
        >
          <Routes>
            {/* <Route path={"/"} element={<Test />} /> */}
            <Route path={"/"} element={<Par />} />
            <Route path={"/addLocal"} element={<AddLocal />} />
            <Route path={"/xian"} element={<Xian />} />
            <Route path="/isolation" element={<Isolation />} />
            <Route path="/die" element={<Die />} />
            <Route path="/cure" element={<Cure />} />
            <Route path="/infect" element={<Infect />} />
            <Route path="/diagnosed" element={<Diagnosed />} />
            <Route path="/userManagement" element={<Manage />} />
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
