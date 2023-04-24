export const historyOption = {
  title: {
    text: "全球疫情历史数据",
    textStyle: {
      fontSize: 20,
    },
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    padding: [8, 60, 0, 20],
    x:'right',  
    data: ['累计确诊', '现存确诊', '新增确诊', '累计死亡', '累计治愈']
  },
  xAxis: {
    data: ["2020-01-28", "2020-05-13", "2020-08-27", "2020-11-28", "2020-12-27"],
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: "累计确诊",
      data: [100000, 22000, 28222, 43222, 492222],
      type: "line",
      stack: "x",
    },
    {
      name: "现存确诊",
      data: [22225, 43345, 32434, 532232, 10323],
      type: "line",
      stack: "x",
    },
    {
      name: "新增确诊",
      data: [225, 4345, 3234, 5232, 1033],
      type: "line",
      stack: "x",
    },
    {
      name: "累计死亡",
      data: [22225, 434345, 3233454, 523332, 103343],
      type: "line",
      stack: "x",
    },
    {
      name: "累计治愈",
      data: [22885, 435745, 325734, 524632, 1034533],
      type: "line",
      stack: "x",
    },
  ],
};

export const recureOption = {
  title: {
    text: "全球治愈率/病死率对比",
    textStyle: {
      fontSize: 20,
    },
  },
  legend: {
    padding: [8, 60, 0, 20],
    x:'right', 
    data: ['治愈率', '病死率']
  },
  tooltip: {
    trigger: 'axis',
    formatter: function (params: string | any[]) {
      var relVal = params[0].name
      for (var i = 0; i < params.length; i++) {
        relVal += '<br/>' + params[i].marker + params[i].seriesName + ' : ' + params[i].value + '%'
      }
      return relVal
    }
  },
  xAxis: {
    type: 'category',
    data: ["2020-01-28", "2020-05-13", "2020-08-27", "2020-11-28", "2020-12-27"],
  },
  yAxis: {
    type: 'value',
    axisLabel: {  
      show: true,  
      interval: 'auto',  
      formatter: '{value} %'  
      },  
  show: true  
  },
  series: [
    {
      name: "治愈率",
      data: [10, 22, 48, 53, 79],
      type: 'line',
      smooth: true
    },
    {
      name: "病死率",
      data: [5, 4, 3, 5, 10],
      type: 'line',
      smooth: true
    }
  ]
}