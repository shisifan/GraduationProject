import { IconUserCircle, IconKey } from "@douyinfe/semi-icons";
import { Button, Form } from "@douyinfe/semi-ui";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

interface Login {
  username: string;
  password: string;
}
const Login = () => {
  const [data, setData] = useState<Login>(null);
  const handleValueChange = (data: Login) => {
    setData(data);
  };
  console.log(123455, data);
  const handleClickLogin = () => {
    // 新建一个 XMLHttpRequest 对象
    const xhr = new XMLHttpRequest();
    // 进行请求
    xhr.open("post", "https://3j783p6226.zicp.fun/shisifan/user/login", true);
    xhr.setRequestHeader("Authorization", "Bearer <token>");
    xhr.setRequestHeader("content-type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({ username: "shsiifan", password: "2222445" }));
    // 等待服务器的响应
    xhr.onreadystatechange = function () {
      // 该函数会被调用四次， 因此需要判断状态是否是4
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("请求数据成功：", JSON.parse(xhr.responseText));
        } else {
          console.log("请求数据失败：", xhr.statusText);
        }
      }
    };
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
