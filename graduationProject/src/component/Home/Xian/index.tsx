import { IconUserCircle, IconKey } from "@douyinfe/semi-icons";
import { Button, Form, Table } from "@douyinfe/semi-ui";
import * as echarts from "echarts";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Message from "../Par/Message";
import {
  xianRecureOption,
  legencyOption,
  columns,
  xianNowRecureOption,
  legencyNowOption,
  deadRate,
} from "./constants";
import "./index.scss";
import ProgressCounter from "./ProgressCounter";

const Xian = () => {
  const [dataSource, setData] = useState([]);
  const area = [
    "未央区",
    "碑林区",
    "雁塔区",
    "阎良区",
    "临潼区",
    "长安区",
    "高陵区",
    "鄠邑区",
    "灞桥区",
    "新城区",
    "莲湖区",
  ];
  const getData = () => {
    const data = [];
    for (let i = 1; i <= 100; i++) {
      data.push({
        number: "" + i,
        area: area[Math.floor(Math.random() * area.length)],
        confirmed: Math.floor(Math.random() * (200 + 1)),
        suspected: Math.floor(Math.random() * (200 + 1)),
        dead: Math.floor(Math.random() * (200 + 1)),
        cure: Math.floor(Math.random() * (200 + 1)),
      });
    }
    return data;
  };

  useEffect(() => {
    const data = getData();
    setData(
      data?.map((item: any, index: number) => {
        return {
          ...item,
          key: index + 1,
        };
      })
    );
  }, []);
  useEffect(() => {
    let xianRecureChart = echarts.init(document.getElementById("recure-dead")!);
    xianRecureChart.setOption(xianRecureOption);
    let legencyChart = echarts.init(document.getElementById("legency")!);
    legencyChart.setOption(legencyOption);
    let xianNowRecureChart = echarts.init(
      document.getElementById("now-recure-dead")!
    );
    xianNowRecureChart.setOption(xianNowRecureOption);
    let legencyNowChart = echarts.init(document.getElementById("now-legency")!);
    legencyNowChart.setOption(legencyNowOption);
  }, []);
  return (
    <div className="xian-content">
      <div className="xian-content-top">
        <div className="xian-content-top-left">
          <div id="legency"></div>
          <div id="recure-dead"></div>
        </div>
        <div className="xian-content-top-middle">
          <Message
            title="现有确诊人数"
            addCount={10}
            total={1901}
            imgProp={"statistics"}
            color={"rgba(var(--semi-red-7), 1)"}
          />
          <Message
            title="累计确诊人数"
            addCount={20}
            total={3484}
            imgProp={"suspected"}
            color={"rgba(var(--semi-red-9), 1)"}
          />
          <Message
            title="累计隔离人数"
            addCount={200}
            total={34244}
            imgProp={"justice"}
            color={"rgba(var(--semi-violet-5), 1)"}
          />
          <Message
            title="累计死亡人数"
            addCount={14}
            total={1844}
            imgProp={"suspected"}
            color={"rgba(var(--semi-grey-9), 1)"}
          />
          <Message
            title="累计治愈人数"
            addCount={140}
            total={18404}
            imgProp={"suspected"}
            color={"rgba(var(--semi-green-4), 1)"}
          />
        </div>
        <div className="xian-content-top-right">
          <div id="now-legency"></div>
          <div id="now-recure-dead"></div>
        </div>
      </div>
      <div className="xian-content-bottom">
        <div className="bottom-left">
          <div className="sick-detail">
            <div className="sick-detail-title">累计病例详情</div>
            <div className="sick-detail-table">
              <Table
                scroll={{ y: 330 }}
                columns={columns}
                dataSource={dataSource}
              />
            </div>
          </div>
        </div>
        <div className="bottom-right">
          <div className="bottom-right-title">各区死亡率</div>
          <div className="progress">
            {deadRate?.map((item, index) => {
              const { area, color, number } = item;
              return (
                <ProgressCounter color={color} name={area} number={number} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Xian;
