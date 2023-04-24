import { Button, Progress } from "@douyinfe/semi-ui";
import React, { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Nav } from "@douyinfe/semi-ui";
import "./index.scss";

interface IProgressProps {
  name: string;
  number: number;
  color: string;
}
const ProgressCounter = (props: IProgressProps) => {
  const { name, number, color } = props;
  return (
    <div className="progress-content">
      <div className="title">{name}</div>
      <Progress
        size="large"
        percent={number}
        stroke={color}
        showInfo={true}
        aria-label="disk usage"
      />
    </div>
  );
};

export default ProgressCounter;
