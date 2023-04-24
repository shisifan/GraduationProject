import { IconUserCircle, IconKey } from "@douyinfe/semi-icons";
import { Link } from "react-router-dom";
import * as echarts from "echarts";
import "./index.scss";
import { historyOption, recureOption } from "./constants";
import { useEffect } from "react";

const LineCharts = () => {
  useEffect(() => {
    let historyMyChart = echarts.init(document.getElementById("history")!);
    historyMyChart.setOption(historyOption);
    let recureMyChart = echarts.init(document.getElementById("recure-dead")!);
    recureMyChart.setOption(recureOption);
  }, []);

  return (
    <div className="line-charts-content">
      <div id="history" style={{ width: "600px", height: "400px" }}></div>
      <div id="recure-dead" style={{ width: "600px", height: "400px" }}></div>
    </div>
  );
};
export default LineCharts;
