import { IconUserCircle, IconKey } from "@douyinfe/semi-icons";
import {
  Button,
  Form,
  Modal,
  Popconfirm,
  Table,
  Toast,
} from "@douyinfe/semi-ui";
import React, {
  Component,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { sendHttpRequest } from "../../../api/request";
import AddModal from "../AddModal";
import { IconAlertTriangle } from "@douyinfe/semi-icons";
import { diagnosedTableData } from "./constants";
import "./index.scss";
import DetailMessage from "../DetailMessage";
import axios from "axios";

const Diagnosed = () => {
  const [isCure, setIsCure] = useState(false);
  const [isDie, setIsDie] = useState(false);
  const [userId, setUserId] = useState();
  const [listData, setListData] = useState([]);
  const [detailVisible, setDetailVisible] = useState(false);
  const [addVisible, setAddVisible] = useState(false);

  const showDialog = () => {
    setAddVisible(true);
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
              <DetailMessage data={text} />;
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
              onConfirm={() => onConfirm(record, 4)}
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
              onConfirm={() => onConfirm(record, 3)}
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

  const getList = async () => {
    try {
      const token = window.localStorage.getItem("token");
      const res = await axios.get(
        "https://3j783p6226.zicp.fun/shisifan/e_user/list?page=1&pageLimit=10&status=2",
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
            key: index + item?.idCard,
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
  const pagination = useMemo(
    () => ({
      pageSize: 8,
    }),
    []
  );
  return (
    <div className="diagnosed-content">
      <div className="diagnosed-content-top">
        <div className="diagnosed-content-top-theme">确诊人员管理</div>
        <div className="diagnosed-content-top-addButton">
          <Button theme="solid" onClick={showDialog}>
            添加确诊人员
          </Button>
          <AddModal
            setAddVisible={setAddVisible}
            addVisible={addVisible}
            title="添加确诊人员"
            status={2}
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
export default Diagnosed;
