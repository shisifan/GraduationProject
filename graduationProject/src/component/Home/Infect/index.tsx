import { IconUserCircle, IconKey } from "@douyinfe/semi-icons";
import { Button, Form, Modal, Table } from "@douyinfe/semi-ui";
import React, { Component, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { historydata, infectTableData } from "./constants";
import "./index.scss";

const Infect = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState()
  const handleOk = () => {
    setVisible(false);
  };
  const handleCanle = () => {
    setVisible(false);
  };
  const handleClickChange = () => {
    setVisible(true);
  };
  const handleAfterClose = () => {
    console.log("After Close callback executed");
  };
  const handleChangeYinStatu = (e: number) => {
    infectTableData.filter((item, index) => {
      item?.key !== e;
    });
  };
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
      title: "疑似感染来源",
      dataIndex: "resource",
      render: (resource: string) => (
        <div style={{ fontSize: "18px" }}>{resource}</div>
      ),
    },
    {
      title: "操作",
      dataIndex: "operate",
      render: (text: any, record: any) => {
        const column = JSON.parse(JSON.stringify(columns));
        column.pop();
        console.log(123, record, column, [].concat(record));
        return (
          <div className="button-content">
            <Button
              theme="solid"
              type="primary"
              style={{ marginRight: 8 }}
              onClick={handleClickChange}
            >
              详情
            </Button>
            <Modal
              title={"密切接触人员管理详情"}
              visible={visible}
              onCancel={handleCanle}
              size={"medium"}
              onOk={handleOk}
              motion={false}
              maskStyle={{ color: "rgba(var(--semi-grey-6), 1)", opacity: 0.6 }}
              afterClose={handleAfterClose} //>=1.16.0
              bodyStyle={{ overflow: "auto", height: "400px" }}
            >
              <div className="detail-content">
                <div className="basis">
                  <div className="title">基本信息</div>
                  <Table
                    pagination={false}
                    columns={column}
                    dataSource={[].concat(record)}
                  ></Table>
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
            </Modal>
            <Button
              theme="solid"
              type="warning"
              style={{ marginRight: 8 }}
              onClick={() => handleChangeYinStatu(record?.key)}
            >
              转为阴性
            </Button>
            <Button theme="solid" type="danger" style={{ marginRight: 8 }}>
              转为确诊
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
      <div className="infect-content-theme">密切接触人员管理</div>
      <div className="infect-content-table">
        <Table
          className="table"
          columns={columns}
          dataSource={infectTableData}
          pagination={pagination}
        />
      </div>
    </div>
  );
};
export default Infect;
