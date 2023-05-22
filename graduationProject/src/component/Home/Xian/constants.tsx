export const legencyOption = {
  title: {
    text: "西安累计确诊和疑似趋势图",
    textStyle: {
      fontSize: 20,
    },
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    padding: [8, 60, 0, 20],
    x: "right",
    data: ["确诊", "疑似"],
  },
  xAxis: {
    data: ["01-28", "05-13", "08-27", "11-28", "12-27"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "确诊",
      data: [1000, 220, 282, 222, 422],
      type: "line",
      stack: "x",
    },
    {
      name: "疑似",
      data: [235, 445, 334, 532, 323],
      type: "line",
      stack: "x",
    },
  ],
};

export const xianRecureOption = {
  title: {
    text: "西安累计死亡和治愈趋势图",
    textStyle: {
      fontSize: 20,
    },
  },
  legend: {
    padding: [8, 60, 0, 20],
    x: "right",
    data: ["治愈率", "病死率"],
  },
  tooltip: {
    trigger: "axis",
    formatter: function (params: string | any[]) {
      var relVal = params[0].name;
      for (var i = 0; i < params.length; i++) {
        relVal +=
          "<br/>" +
          params[i].marker +
          params[i].seriesName +
          " : " +
          params[i].value +
          "%";
      }
      return relVal;
    },
  },
  xAxis: {
    type: "category",
    data: ["01-28", "05-13", "08-27", "11-28", "12-27"],
  },
  yAxis: {
    type: "value",
    axisLabel: {
      show: true,
      interval: "auto",
      formatter: "{value} %",
    },
    show: true,
  },
  series: [
    {
      name: "治愈率",
      data: [10, 22, 48, 53, 79],
      type: "line",
      smooth: true,
    },
    {
      name: "病死率",
      data: [5, 4, 3, 5, 10],
      type: "line",
      smooth: true,
    },
  ],
};

export const legencyNowOption = {
  title: {
    text: "西安当日确诊和疑似趋势图",
    textStyle: {
      fontSize: 20,
    },
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    padding: [8, 60, 0, 20],
    x: "right",
    data: ["确诊", "疑似"],
  },
  xAxis: {
    data: ["01-28", "05-13", "08-27", "11-28", "12-27"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "确诊",
      data: [10, 19, 12, 22, 10],
      type: "line",
      stack: "x",
    },
    {
      name: "疑似",
      data: [22, 40, 34, 32, 23],
      type: "line",
      stack: "x",
    },
  ],
};

export const xianNowRecureOption = {
  title: {
    text: "西安今日死亡和治愈趋势图",
    textStyle: {
      fontSize: 20,
    },
  },
  legend: {
    padding: [8, 60, 0, 20],
    x: "right",
    data: ["治愈率", "病死率"],
  },
  tooltip: {
    trigger: "axis",
    formatter: function (params: string | any[]) {
      var relVal = params[0].name;
      for (var i = 0; i < params.length; i++) {
        relVal +=
          "<br/>" +
          params[i].marker +
          params[i].seriesName +
          " : " +
          params[i].value +
          "%";
      }
      return relVal;
    },
  },
  xAxis: {
    type: "category",
    data: ["01-28", "05-13", "08-27", "11-28", "12-27"],
  },
  yAxis: {
    type: "value",
    axisLabel: {
      show: true,
      interval: "auto",
      formatter: "{value} %",
    },
    show: true,
  },
  series: [
    {
      name: "治愈率",
      data: [9, 2, 5, 8, 7],
      type: "line",
      smooth: true,
    },
    {
      name: "病死率",
      data: [4, 6, 7, 9, 10],
      type: "line",
      smooth: true,
    },
  ],
};
export const areaArray = [
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
export const columns = [
  {
    title: "序号",
    dataIndex: "number",
    render: (text: any, record: any, index: any) => <div>{text}</div>,
  },
  {
    title: "地区",
    dataIndex: "area",
    filters: areaArray?.map((item, index) => {
      return { text: item, value: item };
    }),
    onFilter: (value: any, record: { area: string | any[] }) => {
      return record.area.includes(value);
    },
    render: (text: any) => `${text}`,
  },
  {
    title: "确诊",
    dataIndex: "confirmed",
    sorter: (a: { confirmed: number }, b: { confirmed: number }) =>
      a.confirmed - b.confirmed > 0 ? 1 : -1,
    render: (text: any) => `${text}`,
  },
  {
    title: "疑似",
    dataIndex: "suspected",
    sorter: (a: { suspected: number }, b: { suspected: number }) =>
      a.suspected - b.suspected > 0 ? 1 : -1,
    render: (text: any) => `${text}`,
  },
  {
    title: "死亡",
    dataIndex: "dead",
    sorter: (a: { dead: number }, b: { dead: number }) =>
      a.dead - b.dead > 0 ? 1 : -1,
    render: (text: any) => `${text}`,
  },
  {
    title: "治愈",
    dataIndex: "cure",
    sorter: (a: { cure: number }, b: { cure: number }) =>
      a.cure - b.cure > 0 ? 1 : -1,
    render: (text: any) => `${text}`,
  },
];

export const deadRate = [
  {
    area: "未央区",
    color: "rgba(var(--semi-light-blue-4), 1)",
    number: 23,
  },
  {
    area: "碑林区",
    color: "rgba(var(--semi-cyan-3), 1)",
    number: 63,
  },
  {
    area: "雁塔区",
    color: "rgba(var(--semi-teal-3), 1)",
    number: 29,
  },
  {
    area: "阎良区",
    color: "rgba(var(--semi-green-3), 1)",
    number: 43,
  },
  {
    area: "临潼区",
    color: "rgba(var(--semi-lime-3), 1)",
    number: 55,
  },
  {
    area: "长安区",
    color: "rgba(var(--semi-yellow-3), 1)",
    number: 20,
  },
  {
    area: "高陵区",
    color: "rgba(var(--semi-amber-3), 1)",
    number: 13,
  },
  {
    area: "鄠邑区",
    color: "rgba(var(--semi-indigo-3), 1)",
    number: 30,
  },
  {
    area: "灞桥区",
    color: "rgba(var(--semi-green-7), 1))",
    number: 18,
  },
  {
    area: "新城区",
    color: "rgba(var(--semi-purple-3), 1)",
    number: 40,
  },
  {
    area: "莲湖区",
    color: "rgba(var(--semi-lime-7), 1)",
    number: 78,
  },
];
