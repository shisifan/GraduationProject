import { Button } from "@douyinfe/semi-ui";
import React from "react";
import { Tooltip } from "@douyinfe/semi-ui";
import { IconMoon, IconGithubLogo } from "@douyinfe/semi-icons";
import { StystemTitle } from "./constant";
import "./index.scss";

const Head = () => {
  const switchMode = () => {
    const body = document.body;
    if (body.hasAttribute("theme-mode")) {
      body.removeAttribute("theme-mode");
      // 以下这行代码，window.setMode仅用于当通过本Demo切换时，通知Semi官网Header记录更新当前模式（只用于演示）。在您的代码里无需存在。
      window.setMode("light");
    } else {
      body.setAttribute("theme-mode", "dark");
      window.setMode("dark");
    }
  };

  const linkGit = () => {
    window.open("www.baidu.com");
  };

  return (
    <div className="header-content">
      <div className="header-content-left">
        <img src="https://app.pers.ncku.edu.tw/ncov_web/images/covid-19-web-logo.png" />
        <div className="header-content-left-slogan">fight against the epidemic</div>
      </div>
      <div className="header-content-middle">{StystemTitle}</div>
      <div className="header-content-right">
        <Tooltip content={"切换到暗色模式"}>
          <IconMoon
            className="tooltip"
            onClick={switchMode}
            size="extra-large"
            style={{ color: "rgba(var(--semi-grey-5), 1)" }}
          />
        </Tooltip>
        <Tooltip content={"查看Github"}>
          <IconGithubLogo
            className="tooltip"
            onClick={linkGit}
            size="extra-large"
            style={{ color: "rgba(var(--semi-grey-5), 1)" }}
          />
        </Tooltip>
        <Button
          className="tooltip"
          theme="solid"
          type="primary"
          style={{ marginRight: 8 }}
        >
          登录
        </Button>
      </div>
    </div>
  );
};

export default Head;
