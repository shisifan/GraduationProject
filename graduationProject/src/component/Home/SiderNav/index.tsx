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
  ["par", "人员核酸监测管理"],
  ["addLocal", "新到本地人员管理"],
  ["isolation", "疫情隔离人员信息管理"],
  ["map", "辖区地图管理"],
  ["active", "疫情动态管理"],
  ["infect", "疑似感染人员统计"],
  ["xian", "西安疫情防控"],
  ["diagnosed", "确诊感染人员统计"],
  ["userManagement", "用户管理"],
]);
const SiderNav = () => {
  const [openKeys, setOpenKeys] = useState(["home"]);
  const onOpenChange = (data: any) => {
    setOpenKeys([...data.openKeys]);
  };
  return (
    <div className="nav-content">
      <Nav
        defaultSelectedKeys={["home"]}
        defaultOpenKeys={["user", "work", "count"]}
        openKeys={openKeys}
        className="nav"
        style={{ height: "100vh", width: "30vh" }}
        renderWrapper={({ itemElement, isSubNav, isInSubNav, props }) => {
          const routerMap = new Map([
            ["home", "/"],
            ["user", "/"],
            ["人员核酸监测管理", "/"],
            ["新到本地人员管理", "/addLocal"],
            ["疫情隔离人员信息管理", "/isolation"],
            // ["work", "/map"],
            ["辖区地图管理", "/map"],
            ["疫情动态管理", "/active"],
            // ["count", "/infect"],
            ["疑似感染人员统计", "/infect"],
            ["西安疫情防控", "/xian"],
            ["确诊感染人员统计", "/diagnosed"],
            ["manage", "/userManagement"],
          ]);
          console.log(
            "data",
            props.itemKey,
            itemElement,
            routerMap.get(props.itemKey as string)
          );
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
            itemKey: "user",
            text: "疫情人员管理",
            icon: <IconUser />,
            items: [
              "人员核酸监测管理",
              "新到本地人员管理",
              "疫情隔离人员信息管理",
            ],
          },
          {
            itemKey: "work",
            text: "疫情工作管理",
            icon: <IconStar />,
            items: ["辖区地图管理", "疫情动态管理", "疫情事件上报管理"],
          },
          {
            itemKey: "count",
            text: "本地疫情防控统计",
            icon: <IconHistogram />,
            items: ["西安疫情防控", "疑似感染人员统计", "确诊感染人员统计"],
          },
          {
            text: "用户管理",
            icon: <IconSetting />,
            itemKey: "manage",
          },
        ]}
        onOpenChange={onOpenChange}
        onSelect={(data) => console.log("trigger onSelect: ", data)}
        onClick={(data) => console.log("trigger onClick: ", data)}
      />
    </div>
  );
};

export default SiderNav;
