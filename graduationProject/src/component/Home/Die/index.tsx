import { IconUserCircle, IconKey } from "@douyinfe/semi-icons";
import { Button, Form, Modal, Table, Toast } from "@douyinfe/semi-ui";
import axios from "axios";
import React, { Component, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import DetailMessage from "../DetailMessage";
import { diagnosedTableData } from "./constants";
import "./index.scss";

const Die = () => {
  const [visible, setVisible] = useState(false);
  const [listData, setListData] = useState([]);
  const handleClickChange = () => {
    setVisible(true);
  };
  const handleCanle = () => {
    setVisible(false);
  };
  const handleOk = () => {
    setVisible(false);
  };
  const columns = [
    {
      title: "姓名",
      dataIndex: "username",
      render: (text: string) => <div style={{ fontSize: "18px" }}>{text}</div>,
    },
    {
      title: "身份证号",
      dataIndex: "idCard",
      render: (id: number) => <div style={{ fontSize: "18px" }}>{id}</div>,
    },
    {
      title: "性别",
      dataIndex: "gender",
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
      onFilter: (value: any, record: { gender: string | any[] }) =>
        record.gender.includes(value),
    },
    {
      title: "家庭地址",
      dataIndex: "address",
      render: (adress: string) => (
        <div style={{ fontSize: "18px" }}>{adress}</div>
      ),
    },
    {
      title: "确诊感染来源",
      dataIndex: "epidemicFrom",
      render: (resource: string) => (
        <div style={{ fontSize: "18px" }}>{resource}</div>
      ),
    },
    {
      title: "操作",
      dataIndex: "userId",
      render: (text: any, record: any) => {
        return (
          <div className="button-content">
            <Button
              onClick={handleClickChange}
              theme="solid"
              type="primary"
              style={{ marginRight: 8 }}
            >
              详情
            </Button>
            <Modal
              title={"死亡人员管理详情"}
              visible={visible}
              onCancel={handleCanle}
              size={"medium"}
              onOk={handleOk}
              motion={false}
              maskStyle={{ color: "rgba(var(--semi-grey-6), 1)", opacity: 0.6 }}
              bodyStyle={{ overflow: "auto", height: "400px" }}
            >
              <DetailMessage data={text} />
            </Modal>
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
  const getList = async () => {
    try {
      const token = window.localStorage.getItem("token");
      const res = await axios.get(
        "https://3j783p6226.zicp.fun/shisifan/e_user/list?page=1&pageLimit=10&status=3",
        {
          headers: {
            token: token,
          },
        }
      );
      setListData(
        res?.data?.data?.users?.map((item: any, index: number) => {
          return {
            ...item,
            key: index + 1,
          };
        })
      );
      window.localStorage.setItem("die", res?.data?.data?.sum);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div className="infect-content">
      <div className="infect-content-theme">死亡管理</div>
      <div className="infect-content-table">
        <Table
          className="table"
          columns={columns}
          dataSource={listData}
          pagination={pagination}
        />
      </div>
    </div>
  );
};
export default Die;
