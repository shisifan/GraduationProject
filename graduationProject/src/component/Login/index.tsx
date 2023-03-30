import { IconUserCircle, IconKey } from "@douyinfe/semi-icons";
import { Button, Form } from "@douyinfe/semi-ui";
import React, { Component } from "react";
import "./index.scss";

const Login = () => {
  return (
    <div className="auth">
      <Form autoComplete="off">
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
        <Button theme="solid" type="primary">
          登录
        </Button>
        <div className="auth-bottom">
          <div className="left">如果没有帐号请先 注册帐号</div>
          <div className="right">无法登录？ 找回密码</div>
        </div>
      </Form>
    </div>
  );
};
export default Login;
