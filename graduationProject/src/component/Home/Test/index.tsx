import React, { useState, useMemo, useEffect } from "react";
import { Table, Avatar } from "@douyinfe/semi-ui";
import * as dateFns from "date-fns";
import axios from "axios";

const Test = () => {
  const DAY = 24 * 60 * 60 * 1000;
  const [listData, setListData] = useState([]);
  const figmaIconUrl =
    "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/figma-icon.png";
  const pageSize = 5;

  const columns = [
    {
      title: "标题",
      dataIndex: "name",
      width: 400,
      render: (text, record, index) => {
        return (
          <div>
            <Avatar
              size="small"
              shape="square"
              src={figmaIconUrl}
              style={{ marginRight: 12 }}
            ></Avatar>
            {text}
          </div>
        );
      },
      filters: [
        {
          text: "Semi Design 设计稿",
          value: "Semi Design 设计稿",
        },
        {
          text: "Semi Pro 设计稿",
          value: "Semi Pro 设计稿",
        },
      ],
      onFilter: (value, record) => record.name.includes(value),
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
      setListData(res?.data?.data?.users);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getList();
  }, []);

  const getData = () => {
    const data = [];
    for (let i = 0; i < 46; i++) {
      const isSemiDesign = i % 2 === 0;
      const randomNumber = (i * 1000) % 199;
      data.push({
        key: "" + i,
        name: isSemiDesign
          ? `Semi Design 设计稿${i}.fig`
          : `Semi Pro 设计稿${i}.fig`,
        owner: isSemiDesign ? "姜鹏志" : "郝宣",
        size: randomNumber,
        gender: isSemiDesign ? "男" : "女",
        updateTime: new Date().valueOf() + randomNumber * DAY,
        avatarBg: isSemiDesign ? "grey" : "red",
      });
    }
    return data;
  };

  const data = getData();

  const [dataSource, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setPage] = useState(1);


  const fetchData = (currentPage = 1) => {
    setLoading(true);
    setPage(currentPage);
    return new Promise((res, rej) => {
      setTimeout(() => {
        const data = getData();
        let dataSource = data.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        );
        res(dataSource);
      }, 300);
    }).then((dataSource) => {
      setLoading(false);
      setData(dataSource);
    });
  };

  const handlePageChange = (page) => {
    fetchData(page);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={listData.map((item, index) => {
        return {
          ...item,
          key: index + 1,
        };
      })}
      pagination={{
        currentPage,
        pageSize: 5,
        total: data.length,
        onPageChange: handlePageChange,
      }}
      loading={loading}
    />
  );
};
export default Test;
