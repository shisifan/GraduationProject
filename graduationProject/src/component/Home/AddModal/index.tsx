import { IconUserCircle, IconKey } from "@douyinfe/semi-icons";
import { ArrayField, Button, Form, Table } from "@douyinfe/semi-ui";
import React, { Component, useMemo } from "react";
import { IconPlusCircle, IconMinusCircle } from "@douyinfe/semi-icons";
import { Link } from "react-router-dom";
import "./index.scss";

interface AddModalIProps {
  title: string;
  status: number;
}
const AddModal = (props: AddModalIProps) => {
  const { title, status } = props;
  const handleSelectChange = (value) => {
    let text = value === "male" ? "Hi male" : "Hi female!";
  };
  return (
    <div className="addModal-content">
      <div className="addModal-content-title">{title}</div>
      <div className="addModal-content-form">
        <Form>
          <Form.Input
            rules={[{ required: true, message: "这是必填项" }]}
            field="username"
            label="用户名"
            trigger="blur"
          ></Form.Input>
          <Form.Input
            rules={[{ required: true, message: "这是必填项" }]}
            field="isCard"
            label="身份证号"
            trigger="blur"
          ></Form.Input>
          <Form.Select
            rules={[{ required: true, message: "这是必填项" }]}
            field="gender"
            label="性别"
            onChange={handleSelectChange}
            style={{ width: "100%" }}
          >
            <Form.Select.Option value="female">男</Form.Select.Option>
            <Form.Select.Option value="male">女</Form.Select.Option>
          </Form.Select>
          <Form.Input
            rules={[{ required: true, message: "这是必填项" }]}
            field="address"
            label="家庭地址"
            trigger="blur"
          ></Form.Input>
          <Form.Input
            rules={[{ required: true, message: "这是必填项" }]}
            field="epidemicFrom"
            label="疑似感染来源"
            trigger="blur"
          ></Form.Input>
          <ArrayField field="历史核酸记录">
            {({ add, arrayFields, addWithInitValue }) => (
              <React.Fragment>
                <Button onClick={add} icon={<IconPlusCircle />} theme="light">
                  添加核酸历史记录
                </Button>
                {arrayFields.map(({ field, key, remove }, i) => (
                  <div key={key} style={{ display: "flex" }}>
                    <Form.DatePicker
                      field={`time`}
                      label={`核酸检测时间`}
                      style={{ width: 130, marginRight: 12 }}
                    />
                    <Form.Select
                      field={`result`}
                      label={`核酸检测结果`}
                      style={{ width: 110, marginRight: 12 }}
                      optionList={[
                        { label: "阳性", value: "positive" },
                        { label: "阴性", value: "negative" },
                      ]}
                    ></Form.Select>
                    <Form.Select
                      field={`ctResult`}
                      label={`CT检测结果`}
                      style={{ width: 110 }}
                      optionList={[
                        { label: "阳性", value: "positive" },
                        { label: "阴性", value: "negative" },
                      ]}
                    ></Form.Select>
                    <Button
                      type="danger"
                      theme="borderless"
                      icon={<IconMinusCircle />}
                      onClick={remove}
                      style={{ marginTop: 12 }}
                    />
                  </div>
                ))}
              </React.Fragment>
            )}
          </ArrayField>
        </Form>
      </div>
    </div>
  );
};
export default AddModal;
