import { IconUserCircle, IconKey } from "@douyinfe/semi-icons";
import { Button, Form } from "@douyinfe/semi-ui";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IconHistogram } from "@douyinfe/semi-icons";
import "./index.scss";
import { statistics } from "./constants";

interface IMessageProps {
  title: string;
  addCount: number;
  total: number;
  imgProp: string;
  color: string;
}
const Message = (props: IMessageProps) => {
  const { title, addCount, total, imgProp, color } = props;
  return (
    <div className="top-item">
      <div className="top-item-compare">
        <div className="left">较上日</div>
        <div className="right" style={{ color: `${color}` }}>
          +{addCount}
        </div>
      </div>
      <div className="top-item-total" style={{ color: `${color}` }}>
        {total}
      </div>
      <div className="top-item-title">{title}</div>
    </div>
  );
};
export default Message;
