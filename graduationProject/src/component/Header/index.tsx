import { Button, Popconfirm, Toast } from "@douyinfe/semi-ui";
import React, { useEffect, useState } from "react";
import { Tooltip } from "@douyinfe/semi-ui";
import { IconMoon, IconGithubLogo } from "@douyinfe/semi-icons";
import { StystemTitle } from "./constant";
import "./index.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const navigateTo = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const switchMode = () => {
    const body = document.body;
    if (body.hasAttribute("theme-mode")) {
      body.removeAttribute("theme-mode");
      window.setMode("light");
    } else {
      body.setAttribute("theme-mode", "dark");
      window.setMode("dark");
    }
  };

  const onLoginChange = () => {
    navigateTo("/login");
  };

  const linkGit = () => {
    window.open(
      "https://github.com/shisifan/GraduationProject/tree/main/graduationProject"
    );
  };
  const onConfirm = () => {
    setIsLogin(false);
    window.localStorage.setItem("token", "undefined");
    Toast.success("确认退出！");
  };

  useEffect(() => {
    if (window.localStorage.getItem("token") != "undefined") {
      console.log("isLogin1", isLogin);
      setIsLogin(true);
    } else {
      console.log("isLogin1", isLogin);
      setIsLogin(false);
    }
  }, []);

  console.log("isLogin", isLogin);

  return (
    <div className="header-content">
      <div className="header-content-left">
        <img src="https://app.pers.ncku.edu.tw/ncov_web/images/covid-19-web-logo.png" />
        <div className="header-content-left-slogan">
          fight against the epidemic
        </div>
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
        {isLogin ? (
          <Popconfirm
            title="确定是否要退出登录？"
            content="此修改将不可逆"
            onConfirm={onConfirm}
          >
            <Button
              className="tooltip"
              theme="solid"
              type="primary"
              style={{ marginRight: 8 }}
            >
              已登录
            </Button>
          </Popconfirm>
        ) : (
          <Button
            className="tooltip"
            theme="solid"
            type="primary"
            onClick={onLoginChange}
            style={{ marginRight: 8 }}
          >
            登录
          </Button>
        )}
      </div>
    </div>
  );
};

export default Head;
