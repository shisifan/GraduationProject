import { IconUserCircle, IconKey } from "@douyinfe/semi-icons";
import { Button, Form } from "@douyinfe/semi-ui";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IconHistogram } from "@douyinfe/semi-icons";
import "./index.scss";
import Message from "./Message";

const Par = () => {
  return (
    <div className="par-content">
      <div className="top">
        <Message
          title="全国确诊人数"
          addCount={10}
          total={20}
          imgProp={"statistics"}
        />
        <Message
          title="本地确诊人数"
          addCount={10}
          total={20}
          imgProp={"suspected"}
        />
        <Message
          title="隔离人数"
          addCount={10}
          total={20}
          imgProp={"justice"}
        />
        <Message
          title="死亡人数"
          addCount={10}
          total={20}
          imgProp={"suspected"}
        />
        <Message
          title="治愈人数"
          addCount={10}
          total={20}
          imgProp={"suspected"}
        />
      </div>
    </div>
  );
};
export default Par;
