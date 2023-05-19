import { IconUserCircle, IconKey } from "@douyinfe/semi-icons";
import { Button, Form, Table } from "@douyinfe/semi-ui";
import React, { Component, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { diagnosedTableData } from "./constants";
import "./index.scss";

const Cure = () => {
  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      render: (text: string) => <div style={{ fontSize: "18px" }}>{text}</div>,
    },
    {
      title: "身份证号",
      dataIndex: "id",
      render: (id: number) => <div style={{ fontSize: "18px" }}>{id}</div>,
    },
    {
      title: "性别",
      dataIndex: "sex",
      filters: [
        {
          text: "男",
          value: "男",
        },
        {
          text: "女",
          value: "女",
        },
      ],
      render: (sex: string) => <div style={{ fontSize: "18px" }}>{sex}</div>,
      onFilter: (value: any, record: { sex: string | any[] }) =>
        record.sex.includes(value),
    },
    {
      title: "家庭地址",
      dataIndex: "adress",
      render: (adress: string) => (
        <div style={{ fontSize: "18px" }}>{adress}</div>
      ),
    },
    {
      title: "确诊感染来源",
      dataIndex: "resource",
      render: (resource: string) => (
        <div style={{ fontSize: "18px" }}>{resource}</div>
      ),
    },
    {
      title: "操作",
      dataIndex: "operate",
      render: (text: any, record: any) => {
        return (
          <div className="button-content">
            <Button theme="solid" type="primary" style={{ marginRight: 8 }}>
              详情
            </Button>
          </div>
        );
      },
    },
  ];
  const pagination = useMemo(
    () => ({
      pageSize: 8,
    }),
    []
  );
  return (
    <div className="infect-content">
      <div className="infect-content-theme">治愈管理</div>
      <div className="infect-content-table">
        <Table
          className="table"
          columns={columns}
          dataSource={diagnosedTableData}
          pagination={pagination}
        />
      </div>
    </div>
  );
};
export default Cure;
