import { IconUserCircle, IconKey } from "@douyinfe/semi-icons";
import { Button, Form } from "@douyinfe/semi-ui";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sendHttpRequest } from "../../api/request";
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
    sendHttpRequest("https://3j783p6226.zicp.fun/shisifan/user/login", "post", JSON.stringify(data));
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
