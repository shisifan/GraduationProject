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
  const handleValueChange = (data: Login) => {
    setData(data);
  };
  const handleClickLogin = async () => {
    const res = await axios.post(
      "https://3j783p6226.zicp.fun/shisifan/user/login",
      data
    );
    window.localStorage.setItem("token", res?.headers?.token);
    if (res?.data?.data === 1) {
      console.log("请求数据成功1111");
      navigateTo("/");
      Toast.success("恭喜您，已成功登录！");
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
