import {
  IconUserCircle,
  IconKey,
  IconPlusCircle,
  IconMinusCircle,
} from "@douyinfe/semi-icons";
import { IconAlertTriangle } from "@douyinfe/semi-icons";
import {
  ArrayField,
  Button,
  Form,
  Input,
  Modal,
  Popconfirm,
  Table,
  Toast,
} from "@douyinfe/semi-ui";
import React, { Component, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AddModal from "../AddModal";
import DetailMessage from "../DetailMessage";
import { historydata, infectTableData } from "./constants";
import "./index.scss";

const Infect = () => {
  const [visible, setVisible] = useState(false);
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

  const onConfirm = () => {
    Toast.success("确认保存！");
  };

  const onCancel = () => {
    Toast.warning("取消保存！");
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
              title="确定是否要转为阴性？"
              content="此修改将不可逆"
              onConfirm={onConfirm}
              onCancel={onCancel}
            >
              <Button
                theme="solid"
                type="warning"
                style={{ marginRight: 8 }}
                onClick={() => handleChangeYinStatu(record?.key)}
              >
                转为阴性
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
              title="确定是否要转为确诊？"
              content="此修改将不可逆"
              onConfirm={onConfirm}
              onCancel={onCancel}
            >
              <Button theme="solid" type="danger" style={{ marginRight: 8 }}>
                转为确诊
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

  return (
    <div className="infect-content">
      <div className="infect-content-top">
        <div className="infect-content-top-theme">密切接触人员管理</div>
        <div className="infect-content-top-addButton">
          <Button theme="solid" onClick={showDialog}>
            添加密切接触人员
          </Button>
          <Modal
            centered
            width={500}
            visible={addVisible}
            onOk={addHandleOk}
            onCancel={addHandleCancel}
            closeOnEsc={true}
          >
            <AddModal title="添加密切接触人员" status={1} />
          </Modal>
        </div>
      </div>

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
