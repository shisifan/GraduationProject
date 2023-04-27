import { Button } from "@douyinfe/semi-ui";
import React, { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Nav } from "@douyinfe/semi-ui";
import {
  IconSetting,
  IconHistogram,
  IconUser,
  IconStar,
  IconHome,
} from "@douyinfe/semi-icons";
import "./index.scss";

const navMap = new Map([
  // ["par", "人员核酸监测管理"],
  ["addLocal", "新到本地人员管理"],
  ["isolation", "疫情隔离人员信息管理"],
  ["map", "辖区地图管理"],
  ["active", "疫情动态管理"],
  ["infect", "密切接触人员管理"],
  ["xian", "西安疫情防控"],
  ["diagnosed", "确诊感染人员统计"],
  ["userManagement", "用户管理"],
]);
const SiderNav = () => {
  const [openKeys, setOpenKeys] = useState(["home"]);
  const [selectedKeys, setSelectedKeys] = useState(["首页"]);
  const onSelect = (data: { selectedKeys: any }) => {
    console.log("trigger onSelect: ", data);
    setSelectedKeys([...data.selectedKeys]);
  };
  const onOpenChange = (data: any) => {
    setOpenKeys([...data.openKeys]);
  };
  return (
    <div className="nav-content">
      <Nav
        defaultSelectedKeys={["home"]}
        defaultOpenKeys={["count"]}
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        className="nav"
        style={{ height: "100vh", width: "30vh" }}
        renderWrapper={({ itemElement, isSubNav, isInSubNav, props }) => {
          const routerMap = new Map([
            ["home", "/"],
            ["user", "/"],
            ["新到本地人员管理", "/addLocal"],
            ["疫情隔离人员信息管理", "/isolation"],
            ["密切接触人员管理", "/infect"],
            ["确诊感染人员管理", "/diagnosed"],
            ["西安疫情防控", "/xian"],
            ["死亡管理", "/die"],
            ["治愈管理", "/cure"],
            ["manage", "/userManagement"],
          ]);
          return (
            <Link
              style={{ textDecoration: "none" }}
              to={routerMap.get(props.itemKey as string) || "/"}
            >
              {itemElement}
            </Link>
          );
        }}
        items={[
          {
            text: "首页",
            icon: <IconHome />,
            itemKey: "home",
          },
          {
            itemKey: "count",
            text: "本地疫情防控管理",
            icon: <IconHistogram />,
            items: [
              "西安疫情防控",
              "密切接触人员管理",
              "确诊感染人员管理",
              "死亡管理",
              "治愈管理",
            ],
          },
          // {
          //   itemKey: "user",
          //   text: "疫情人员管理",
          //   icon: <IconUser />,
          //   items: ["新到本地人员管理", "疫情隔离人员信息管理"],
          // },
          {
            text: "用户管理",
            icon: <IconSetting />,
            itemKey: "manage",
          },
        ]}
        onOpenChange={onOpenChange}
        onSelect={onSelect}
        // onSelect={(data) => console.log("trigger onSelect: ", data)}
        onClick={(data) => console.log("trigger onClick: ", data)}
      />
    </div>
  );
};

export default SiderNav;
