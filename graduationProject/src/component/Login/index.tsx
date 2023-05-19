import { IconUserCircle, IconKey } from "@douyinfe/semi-icons";
import { Button, Form, Toast } from "@douyinfe/semi-ui";
import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.scss";

interface Login {
  username: string;
  password: string;
}
const Login = () => {
  const [data, setData] = useState<Login>(null);
  const navigateTo = useNavigate();
  const [response, setResponse] = useState<number>();
  const handleValueChange = (data: Login) => {
    setData(data);
  };
  const sendHttpRequest = (url: string, method: string, body: string) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader("Authorization", "Bearer <token>");
    xhr.setRequestHeader("content-type", "application/json;charset=UTF-8");
    xhr.send(body);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          setResponse(JSON.parse(xhr.responseText)?.data);
          console.log("请求数据成功：", JSON.parse(xhr.responseText));
          return JSON.parse(xhr.responseText);
        } else {
          setResponse(JSON.parse(xhr.responseText)?.data);
          console.log("请求数据失败：", xhr.statusText);
          return JSON.parse(xhr.responseText);
        }
      }
    };
  };
  const handleClickLogin = () => {
    sendHttpRequest(
      "https://3j783p6226.zicp.fun/shisifan/user/login",
      "post",
      JSON.stringify(data)
    );
    if (response === 1) {
      Toast.success("恭喜您，已成功登录！");
      navigateTo("/");
    }
  };
  return (
    <div className="auth">
      <Form autoComplete="off" onValueChange={handleValueChange}>
        <h2>登录</h2>
        <Form.Input
          className="auth-input"
          field="username"
          label="用户名"
          prefix={<IconUserCircle />}
          placeholder="请输入用户名"
        />
        <Form.Input
          label="密码"
          className="auth-input"
          field="password"
          prefix={<IconKey />}
          mode="password"
          placeholder="请输入密码"
        />
        <Button theme="solid" type="primary" onClick={handleClickLogin}>
          登录
        </Button>
        <div className="auth-bottom">
          <div className="left">
            如果没有帐号请先 <Link to="/register">注册帐号</Link>
          </div>
          <div className="right">
            无法登录？ <Link to="">找回密码</Link>
          </div>
        </div>
      </Form>
    </div>
  );
};
export default Login;
