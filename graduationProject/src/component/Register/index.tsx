import { IconUserCircle, IconKey, IconMail } from "@douyinfe/semi-icons";
import { Button, Form, Toast } from "@douyinfe/semi-ui";
import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const Register = () => {
  const navigateTo = useNavigate();
  const onSucessRegisterChange = () => {
    Toast.success("恭喜您，已成功注册！");
    navigateTo("/login");
  };
  return (
    <div className="auth">
      <Form autoComplete="off">
        <h2>注册</h2>
        <Form.Input
          className="auth-input"
          field="username"
          label="用户名"
          prefix={<IconUserCircle />}
          placeholder="请输入用户名"
        />
        <Form.Input
          className="auth-input"
          field="email"
          label="邮箱"
          prefix={<IconMail />}
          placeholder="请输入邮箱地址"
        />
        <Form.Input
          label="密码"
          className="auth-input"
          field="password"
          prefix={<IconKey />}
          mode="password"
          placeholder="请输入密码"
        />
        <Button theme="solid" type="primary" onClick={onSucessRegisterChange}>
          注册
        </Button>
      </Form>
    </div>
  );
};
export default Register;
