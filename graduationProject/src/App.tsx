import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Layout } from "@douyinfe/semi-ui";
import Foot from "./component/Footer";
import Head from "./component/Header";
import Home from "./component/Home";
import Example from "./component/Example";

function PageLayout() {
  const { Header, Footer } = Layout;
  return (
    <div>
      <Layout className="components-layout-demo">
        <Header>
          <Head />
        </Header>
        <Layout style={{ height: "80vh" }}>
          <Outlet />
        </Layout>
        <Footer>
          <Foot />
        </Footer>
      </Layout>
    </div>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/register",
    element: <Example login={false} />,
  },
  {
    path: "/login",
    element: <Example login={true} />,
  },
]);

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
