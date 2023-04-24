import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "@douyinfe/semi-ui";
import Foot from "./component/Footer";
import Head from "./component/Header";
import Home from "./component/Home";
import Example from "./component/Example";
import AddLocal from "./component/Home/AddLocal";
import Xian from "./component/Home/Xian";

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
        children: [{ path: "/addLocal", element: <AddLocal /> }],
      },
      {
        path: "/",
        element: <Home />,
        children: [{ path: "/xian", element: <Xian /> }],
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
