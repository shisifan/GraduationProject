import { Button } from "@douyinfe/semi-ui";
import React from "react";
import { Nav } from "@douyinfe/semi-ui";
import {
  IconSetting,
  IconHistogram,
  IconUser,
  IconStar,
} from "@douyinfe/semi-icons";
import "./index.scss";

const SiderNav = () => {
  return (
    <div>
      <Nav
        style={{ height: "80vh" }}
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
            itemKey: "job",
          },
        ]}
        onSelect={(data) => console.log("trigger onSelect: ", data)}
        onClick={(data) => console.log("trigger onClick: ", data)}
      />
    </div>
  );
};

export default SiderNav;
