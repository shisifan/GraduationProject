import { Button } from "@douyinfe/semi-ui";
import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Nav } from "@douyinfe/semi-ui";
import {
  IconSetting,
  IconHistogram,
  IconUser,
  IconStar,
} from "@douyinfe/semi-icons";
import "./index.scss";

const navMap = new Map([
  ["par", "人员核酸监测管理"],
  ["addLocal", "新到本地人员管理"],
  ["isolation", "疫情隔离人员信息管理"],
  ["map", "辖区地图管理"],
  ["active", "疫情动态管理"],
  ["infect", "疑似感染人员统计"],
  ["diagnosed", "确诊感染人员统计"],
  ["userManagement", "用户管理"],
]);
const SiderNav = () => {
  return (
    <div>
      <Nav
        style={{ height: "100vh", width: "30vh" }}
        // renderWrapper={({ itemElement, isSubNav, isInSubNav, props }) => {
        //   const routerMap = new Map([
        //     ["人员核酸监测管理", "/"],
        //     ["新到本地人员管理", "/addLocal"],
        //     ["疫情隔离人员信息管理", "/isolation"],
        //     ["辖区地图管理", "/map"],
        //     ["疫情动态管理", "/active"],
        //     ["疑似感染人员统计", "infect"],
        //     ["确诊感染人员统计", "diagnosed"],
        //     ["用户管理", "userManagement"],
        //   ]);
        //   console.log(props.itemKey, itemElement, routerMap.get(props.itemKey));

        //   return (
        //     <Link
        //       style={{ textDecoration: "none" }}
        //       to={routerMap.get(props.itemKey) || "/"}
        //     >
        //       {itemElement}
        //     </Link>
        //   );
        // }}
        items={[
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
            itemKey: "Count",
            text: "疫情防控统计",
            icon: <IconHistogram />,
            items: ["疑似感染人员统计", "确诊感染人员统计"],
          },
          {
            text: "用户管理",
            icon: <IconSetting />,
            itemKey: "用户管理",
          },
        ]}
        onSelect={(data) => console.log("trigger onSelect: ", data)}
        onClick={(data) => console.log("trigger onClick: ", data)}
      />
    </div>
  );
};

export default SiderNav;
