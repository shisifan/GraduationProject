import { IconUserCircle, IconKey } from "@douyinfe/semi-icons";
import { Link } from "react-router-dom";
import * as echarts from "echarts";
import "./index.scss";
import { hourTopOption, confirmedOption } from "./constants";
import { useEffect } from "react";

const PieCharts = () => {
  useEffect(() => {
    let historyMyChart = echarts.init(document.getElementById("hourTop")!);
    historyMyChart.setOption(hourTopOption);
    let recureMyChart = echarts.init(document.getElementById("confirmed")!);
    recureMyChart.setOption(confirmedOption);
  }, []);

  return (
    <div className="pie-charts-content">
      <div id="hourTop" style={{ width: "600px", height: "400px" }}></div>
      <div id="confirmed" style={{ width: "600px", height: "400px" }}></div>
    </div>
  );
};
export default PieCharts;
