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
}
const Message = (props: IMessageProps) => {
  const { title, addCount, total, imgProp } = props;
  return (
    <div className="top-item">
      <div className="top-item-left">
        <div className="title">{title}</div>
        <div className="add">新增{addCount}个</div>
        <div className="total">总数{total}</div>
      </div>
      <div className="top-item-right">
        <img src={"/src/icons/" + `${imgProp}.png`} />
      </div>
    </div>
  );
};
export default Message;
