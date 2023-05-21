import { IconUserCircle, IconKey } from "@douyinfe/semi-icons";
import { ArrayField, Button, Form, Table } from "@douyinfe/semi-ui";
import React, { Component, useMemo } from "react";
import "./index.scss";
import { historydata } from "../Infect/constants";

interface DetailMessageIProps {
  data: any;
}
const DetailMessage = (props: DetailMessageIProps) => {
  const { data } = props;
  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      render: (text: string) => <div style={{ fontSize: "16px" }}>{text}</div>,
    },
    {
      title: "身份证号",
      dataIndex: "id",
      render: (id: number) => <div style={{ fontSize: "16px" }}>{id}</div>,
    },
    {
      title: "性别",
      dataIndex: "sex",
      render: (sex: string) => <div style={{ fontSize: "16px" }}>{sex}</div>,
    },
    {
      title: "家庭地址",
      dataIndex: "adress",
      render: (adress: string) => (
        <div style={{ fontSize: "16px" }}>{adress}</div>
      ),
    },
    {
      title: "疑似感染来源",
      dataIndex: "resource",
      render: (resource: string) => (
        <div style={{ fontSize: "16px" }}>{resource}</div>
      ),
    },
  ];
  const historyColumns = [
    {
      title: "检测时间",
      dataIndex: "time",
    },
    {
      title: "核酸检测",
      dataIndex: "result",
    },
    {
      title: "CT检测",
      dataIndex: "ct",
    },
  ];
  return (
    <div className="detail-content">
      <div className="basis">
        <div className="title">基本信息</div>
        <Table pagination={false} columns={columns} dataSource={data}></Table>
      </div>
      <div className="history">
        <div className="title">核酸检测历史</div>
        <Table
          pagination={false}
          columns={historyColumns}
          dataSource={historydata}
          scroll={{ y: 150 }}
        ></Table>
      </div>
    </div>
  );
};
export default DetailMessage;
