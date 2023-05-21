import { IconUserCircle, IconKey } from "@douyinfe/semi-icons";
import {
  Button,
  Form,
  Modal,
  Popconfirm,
  Table,
  Toast,
} from "@douyinfe/semi-ui";
import React, { Component, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { sendHttpRequest } from "../../../api/request";
import AddModal from "../AddModal";
import { IconAlertTriangle } from "@douyinfe/semi-icons";
import { diagnosedTableData } from "./constants";
import "./index.scss";
import DetailMessage from "../DetailMessage";

const Diagnosed = () => {
  const [isCure, setIsCure] = useState(false);
  const [isDie, setIsDie] = useState(false);
  const [detailVisible, setDetailVisible] = useState(false);
  const [addVisible, setAddVisible] = useState(false);

  const showDialog = () => {
    setAddVisible(true);
  };
  const addHandleOk = () => {
    setAddVisible(false);
  };
  const addHandleCancel = () => {
    setAddVisible(false);
  };

  const detailHandleCanle = () => {
    setDetailVisible(false);
  };

  const detailHandleOk = () => {
    setDetailVisible(false);
  };

  const handleDetailClickChange = () => {
    setDetailVisible(true);
  };

  const onConfirm = () => {
    Toast.success("确认保存！");
  };

  const onCancel = () => {
    Toast.warning("取消保存！");
  };
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
            <Button
              theme="solid"
              type="primary"
              style={{ marginRight: 8 }}
              onClick={handleDetailClickChange}
            >
              详情
            </Button>
            <Modal
              title={"确诊感染人员管理详情"}
              visible={detailVisible}
              onCancel={detailHandleCanle}
              size={"medium"}
              onOk={detailHandleOk}
              motion={false}
              maskStyle={{ color: "rgba(var(--semi-grey-6), 1)", opacity: 0.6 }}
              bodyStyle={{ overflow: "auto", height: "400px" }}
            >
              <DetailMessage data={[].concat(record)} />
            </Modal>
            <Popconfirm
              okType="warning"
              icon={
                <IconAlertTriangle
                  style={{ color: "var(--semi-color-warning)" }}
                  size="extra-large"
                />
              }
              title="确定是否要转为治愈？"
              content="此修改将不可逆"
              onConfirm={onConfirm}
              onCancel={onCancel}
            >
              <Button theme="solid" type="warning" style={{ marginRight: 8 }}>
                转为治愈
              </Button>
            </Popconfirm>
            <Popconfirm
              okType="danger"
              icon={
                <IconAlertTriangle
                  style={{ color: "var(--semi-color-danger)" }}
                  size="extra-large"
                />
              }
              title="确定是否要转为死亡？"
              content="此修改将不可逆"
              onConfirm={onConfirm}
              onCancel={onCancel}
            >
              <Button theme="solid" type="danger" style={{ marginRight: 8 }}>
                转为死亡
              </Button>
            </Popconfirm>
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
  useEffect(() => {
    sendHttpRequest("https://3j783p6226.zicp.fun/shisifan/user/login", "post");
  }, [isCure, isDie]);
  return (
    <div className="diagnosed-content">
      <div className="diagnosed-content-top">
        <div className="diagnosed-content-top-theme">确诊人员管理</div>
        <div className="diagnosed-content-top-addButton">
          <Button theme="solid" onClick={showDialog}>
            添加确诊人员
          </Button>
          <Modal
            centered
            width={500}
            visible={addVisible}
            onOk={addHandleOk}
            onCancel={addHandleCancel}
            closeOnEsc={true}
          >
            <AddModal title="添加确诊人员" status={2} />
          </Modal>
        </div>
      </div>

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
export default Diagnosed;
