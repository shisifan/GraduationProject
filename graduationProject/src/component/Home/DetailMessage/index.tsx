import { IconUserCircle, IconKey } from "@douyinfe/semi-icons";
import { ArrayField, Button, Form, Table } from "@douyinfe/semi-ui";
import axios from "axios";
import React, { Component, useEffect, useMemo, useState } from "react";
import "./index.scss";

interface DetailMessageIProps {
  data: number;
}
const DetailMessage = (props: DetailMessageIProps) => {
  const { data } = props;
  const [res, setRes] = useState([]);
  const changeStatus = async () => {
    const token = window.localStorage.getItem("token");
    const res = await axios.get(
      "https://3j783p6226.zicp.fun/shisifan/e_user/select?uid=" + data,
      {
        headers: {
          token: token,
        },
      }
    );
    setRes(res?.data?.data);
  };
  useEffect(() => {
    changeStatus();
  }, []);
  const columns = [
    {
      title: "姓名",
      dataIndex: "username",
      render: (text: string) => <div style={{ fontSize: "14px" }}>{text}</div>,
    },
    {
      title: "身份证号",
      dataIndex: "idCard",
      render: (id: number) => <div style={{ fontSize: "14px" }}>{id}</div>,
    },
    {
      title: "性别",
      dataIndex: "gender",
      render: (sex: string) => <div style={{ fontSize: "14px" }}>{sex}</div>,
    },
    {
      title: "家庭地址",
      dataIndex: "address",
      render: (adress: string) => (
        <div style={{ fontSize: "14px" }}>{adress}</div>
      ),
    },
    {
      title: "疑似感染来源",
      dataIndex: "epidemicFrom",
      render: (resource: string) => (
        <div style={{ fontSize: "14px" }}>{resource}</div>
      ),
    },
  ];
  const historyColumns = [
    {
      title: "检测时间",
      dataIndex: "testTime",
    },
    {
      title: "核酸检测",
      dataIndex: "testResult",
    },
    {
      title: "CT检测",
      dataIndex: "testResult",
    },
  ];
  return (
    <div className="detail-content">
      <div className="basis">
        <div className="title">基本信息</div>
        <Table
          pagination={false}
          columns={columns}
          dataSource={[].concat(res)}
        ></Table>
      </div>
      <div className="history">
        <div className="title">核酸检测历史</div>
        <Table
          pagination={false}
          columns={historyColumns}
          dataSource={res?.tests}
          scroll={{ y: 150 }}
        ></Table>
      </div>
    </div>
  );
};
export default DetailMessage;
