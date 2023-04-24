import { IconUserCircle, IconKey } from "@douyinfe/semi-icons";
import { Button, Form, Spin } from "@douyinfe/semi-ui";
import React, { Component, Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IconHistogram } from "@douyinfe/semi-icons";
import "./index.scss";
import { Timeline } from "@douyinfe/semi-ui";
import Message from "./Message";
import { timeLineData } from "./constants";
import LineCharts from "./LineCharts";
import PieCharts from "./PieCharts";

const Par = () => {
  const [spinning, setSpinning] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSpinning(false);
    }, 10000);
  }, []);
  return (
    <Fragment>
      <div className="par-content">
        <div className="top">
          <Message
            title="现有确诊"
            addCount={10}
            total={19061}
            imgProp={"statistics"}
            color={"rgba(var(--semi-red-7), 1)"}
          />
          <Message
            title="累计确诊"
            addCount={3488574}
            total={3488574}
            imgProp={"suspected"}
            color={"rgba(var(--semi-red-9), 1)"}
          />
          <Message
            title="累计隔离人数"
            addCount={3488444}
            total={3488444}
            imgProp={"justice"}
            color={"rgba(var(--semi-violet-5), 1)"}
          />
          <Message
            title="累计死亡"
            addCount={1488444}
            total={1488444}
            imgProp={"suspected"}
            color={"rgba(var(--semi-grey-9), 1)"}
          />
          <Message
            title="累计治愈人数"
            addCount={1588444}
            total={2184440}
            imgProp={"suspected"}
            color={"rgba(var(--semi-indigo-6), 1)"}
          />
        </div>
        <LineCharts />
        <PieCharts />
        <div className="middle">
          <div className="middle-message">
            <div className="middle-message-title">全国最新疫情新闻</div>
            <div className="timeline">
              <Timeline mode="left">
                {timeLineData?.map((item, index) => {
                  const { description, time } = item;
                  return (
                    <Timeline.Item time={time} key={index}>
                      <span style={{ fontSize: "16px" }}>{description}</span>
                    </Timeline.Item>
                  );
                })}
              </Timeline>
            </div>
          </div>
          <div className="map-iframe">
            <div className="map-iframe-title">全国疫情地图</div>
            <Spin
              spinning={spinning}
              size="large"
              tip="地图加载中...耐心等待哦！"
            >
              <iframe
                frameBorder="no"
                src="http://localhost:3000/"
                height="500px"
                width="700px"
              />
            </Spin>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Par;
