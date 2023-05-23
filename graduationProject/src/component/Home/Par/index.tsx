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
  const dieCount = Number(
    window.localStorage.getItem("die") !== "undefined"
      ? window.localStorage.getItem("die")
      : 0
  );
  const cureCount = Number(
    window.localStorage.getItem("cure") !== "undefined"
      ? window.localStorage.getItem("cure")
      : 0
  );
  const diagnosedCount = Number(
    window.localStorage.getItem("diagnosed") !== "undefined"
      ? window.localStorage.getItem("diagnosed")
      : 0
  );
  const infectCount = Number(
    window.localStorage.getItem("infect") !== "undefined"
      ? window.localStorage.getItem("infect")
      : 0
  );
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
            addCount={10 + diagnosedCount}
            total={19061 + diagnosedCount}
            imgProp={"statistics"}
            color={"rgba(var(--semi-red-7), 1)"}
          />
          <Message
            title="累计确诊"
            addCount={348857 + diagnosedCount}
            total={3488574 + diagnosedCount}
            imgProp={"suspected"}
            color={"rgba(var(--semi-red-9), 1)"}
          />
          <Message
            title="累计隔离人数"
            addCount={348841 + infectCount}
            total={3488444 + infectCount}
            imgProp={"justice"}
            color={"rgba(var(--semi-violet-5), 1)"}
          />
          <Message
            title="累计死亡"
            addCount={48840 + dieCount}
            total={1488444 + dieCount}
            imgProp={"suspected"}
            color={"rgba(var(--semi-grey-9), 1)"}
          />
          <Message
            title="累计治愈人数"
            addCount={1588444 + cureCount}
            total={2184440 + cureCount}
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
