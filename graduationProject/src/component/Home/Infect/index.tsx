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
import axios from "axios";
import React, { Component, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AddModal from "../AddModal";
import DetailMessage from "../DetailMessage";
import { historydata, infectTableData } from "./constants";
import "./index.scss";

const Infect = () => {
  const [listData, setListData] = useState([]);
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
  const changeStatus = async (record: any, status: number) => {
    const token = window.localStorage.getItem("token");
    const res = await axios.post(
      "https://3j783p6226.zicp.fun/shisifan/e_user/update",
      {
        userId: record?.userId,
        status: status,
      },
      {
        headers: {
          token: token,
        },
      }
    );
    if (res?.data?.data) {
      Toast.success(res?.data?.msg);
    } else {
      Toast.warning(res?.data?.msg);
    }
  };

  const onConfirm = (record: any, status: number) => {
    changeStatus(record, status);
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
      title: "疑似感染来源",
      dataIndex: "epidemicFrom",
      render: (resource: string) => (
        <div style={{ fontSize: "18px" }}>{resource}</div>
      ),
    },
    {
      title: "操作",
      dataIndex: "userId",
      render: (text: any, record: any) => {
        const column = JSON.parse(JSON.stringify(columns));
        column.pop();
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
              <DetailMessage data={text} />
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
              onConfirm={() => onConfirm(record, 5)}
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
              onConfirm={() => onConfirm(record, 2)}
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
  const getList = async () => {
    try {
      const token = window.localStorage.getItem("token");
      const res = await axios.get(
        "https://3j783p6226.zicp.fun/shisifan/e_user/list?page=1&pageLimit=10&status=1",
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
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getList();
  }, [addVisible]);

  return (
    <div className="infect-content">
      <div className="infect-content-top">
        <div className="infect-content-top-theme">密切接触人员管理</div>
        <div className="infect-content-top-addButton">
          <Button theme="solid" onClick={showDialog}>
            添加密切接触人员
          </Button>
          <AddModal
            setAddVisible={setAddVisible}
            addVisible={addVisible}
            title="添加密切接触人员"
            status={1}
          />
        </div>
      </div>

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
export default Infect;
