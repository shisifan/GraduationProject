import { IconUserCircle, IconKey, IconMail } from "@douyinfe/semi-icons";
import { Button, Form, Toast } from "@douyinfe/semi-ui";
import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

interface InputType {
  username: string;
  email: string;
  password: string;
}
const Register = () => {
  const [inputs, setInputs] = useState<InputType>();
  const navigateTo = useNavigate();
  const onSucessRegisterChange = () => {
    Toast.success("恭喜您，已成功注册！");
    navigateTo("/login");
  };
  const hanleChange = (e: any) => {
    const value = e.values;
    setInputs({
      username: value?.username,
      email: value?.email,
      password: value?.password,
    });
  };

  

  return (
    <div className="auth">
      <Form autoComplete="off" onChange={hanleChange}>
        <h2>注册</h2>
        <Form.Input
          className="auth-input"
          field="username"
          label="用户名"
          name="username"
          prefix={<IconUserCircle />}
          placeholder="请输入用户名"
        />
        <Form.Input
          className="auth-input"
          field="email"
          label="邮箱"
          name="email"
          prefix={<IconMail />}
          placeholder="请输入邮箱地址"
        />
        <Form.Input
          label="密码"
          name="password"
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
