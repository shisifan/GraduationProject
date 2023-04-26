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
import Infect from "./component/Home/Infect";
import Diagnosed from "./component/Home/Diagnosed";
import Manage from "./component/Home/Manage";
import Isolation from "./component/Home/Isolation";
import Cure from "./component/Home/Cure";
import Die from "./component/Home/Die";

function PageLayout() {
  const { Header, Footer } = Layout;
  return (
    <div>
      <Layout className="components-layout-demo">
        <Header>
          <Head />
        </Header>
        <Layout>
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
      {
        path: "/",
        element: <Home />,
        children: [{ path: "/infect", element: <Infect /> }],
      },
      {
        path: "/",
        element: <Home />,
        children: [{ path: "/diagnosed", element: <Diagnosed /> }],
      },
      {
        path: "/",
        element: <Home />,
        children: [{ path: "/userManagement", element: <Manage /> }],
      },
      {
        path: "/",
        element: <Home />,
        children: [{ path: "/isolation", element: <Isolation /> }],
      },
      {
        path: "/",
        element: <Home />,
        children: [{ path: "/cure", element: <Cure /> }],
      },
      {
        path: "/",
        element: <Home />,
        children: [{ path: "/die", element: <Die /> }],
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
